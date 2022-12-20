package main

import (
	"bufio"
	"flag"
	"fmt"
	"io/fs"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
	"sync"
)

func main() {
	var wg sync.WaitGroup

	var compiledProtoDirPath string
	flag.StringVar(&compiledProtoDirPath, "comp", "", "compiled proto directory")

	var protoFilesDir string
	flag.StringVar(&protoFilesDir, "proto", "", "proto-files directory")

	var indexFilePath string
	flag.StringVar(&indexFilePath, "index", "", "index.ts file directory")

	flag.Parse()

	dir, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}

	cleanup(compiledProtoDirPath, indexFilePath)

	for _, filePath := range find(filepath.Join(dir, protoFilesDir), ".proto") {
		wg.Add(1)
		go buildTsFiles(filepath.Join(dir, compiledProtoDirPath), filepath.Join(dir, protoFilesDir), filePath, &wg)
	}

	wg.Add(1)
	go createIndexFile(protoFilesDir, indexFilePath, &wg)
	wg.Wait()

	var wg1 sync.WaitGroup
	for _, filePath := range find(filepath.Join(dir, compiledProtoDirPath), ".ts") {
		wg1.Add(1)
		go replaceAndRemove(&wg1, filePath)
	}
	wg1.Wait()
}

func cleanup(compiledProtoDirPath string, indexFilePath string) {
	dir, _ := os.Getwd()

	// remove compiled_proto build dir
	if _, err := os.Stat(filepath.Join(dir, "build")); err == nil {
		err := os.RemoveAll(filepath.Join(dir, compiledProtoDirPath))
		if err != nil {
			log.Fatal(err)
		}
	}
	// remove build dir
	if _, err := os.Stat(filepath.Join(dir, "build")); err == nil {
		err = os.RemoveAll(filepath.Join(dir, "build"))
		if err != nil {
			log.Fatal(err)
		}
	}

	// remove index.ts file
	if _, err := os.Stat(filepath.Join(dir, indexFilePath)); err == nil {
		err = os.Remove(filepath.Join(dir, indexFilePath))
		if err != nil {
			log.Println("", err)
		}
	}

	// create compiled_proto dir again
	if _, err := os.Stat(filepath.Join(dir, compiledProtoDirPath)); os.IsNotExist(err) {
		errDir := os.MkdirAll(filepath.Join(dir, compiledProtoDirPath), 0755)
		if errDir != nil {
			log.Fatal(err)
		}
	}
}

func createIndexFile(protoFilesDir string, indexFilePath string, wg *sync.WaitGroup) {
	defer wg.Done()

	dir, _ := os.Getwd()

	var lines []string
	var services []string
	serviceMap := make(map[string]string)

	for _, filePath := range find(filepath.Join(dir, protoFilesDir), ".proto") {
		fileName := fileNameWithoutExtension(filepath.Base(filePath))
		regex, _ := regexp.Compile("/v[0-9]")
		version := string(regex.Find([]byte(filePath)))

		// import line
		line := "export * as " + capitalize(fileName) + " from './compiled_proto/" + fileName + version + "/" + fileName + "';"
		serviceMap[fileName] = line

		// array to sort alphabetically
		services = append(services, fileName)
	}

	// sort services alphabetically
	sort.Strings(services)

	for _, service := range services {
		lines = append(lines, serviceMap[service])
	}

	output := strings.Join(lines, "\n")

	f, err := os.OpenFile(filepath.Join(dir, indexFilePath),
		os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		log.Println(err)
	}
	defer f.Close()
	if _, err := f.WriteString(output); err != nil {
		log.Println(err)
	}
}

func buildTsFiles(compiledProtoDirPath string, protoFilesDir string, filePath string, wg *sync.WaitGroup) {
	defer wg.Done()
	args := []string{"yarn", "grpc_tools_node_protoc", "--ts_proto_out=" + compiledProtoDirPath, "--ts_proto_opt=outputServices=grpc-js", "--ts_proto_opt=useOptionals=true", "--ts_proto_opt=esModuleInterop=true", "--ts_proto_opt=env=node", "--proto_path=" + protoFilesDir, filePath}
	output, err := RunCMD("npx", args, false)

	if err != nil {
		fmt.Println("Error:", output)
	}
}

func replaceAndRemove(wg *sync.WaitGroup, filePath string) {
	defer wg.Done()

	tsFile, err := os.Open(filePath)
	if err != nil {
		log.Fatalln(err)
	}
	defer tsFile.Close()

	scanner := bufio.NewScanner(tsFile)
	scanner.Split(bufio.ScanLines)

	var lines []string
	skipNextLine := false
	requiredPrevLine := false
	deprecatedPrevLine := false

	propertyMap := make(map[string]bool)
	deprecatedMap := make(map[string]bool)

	for scanner.Scan() {
		if skipNextLine {
			skipNextLine = false
			continue
		}

		// make types mandatory where previous line was marked with '/** @required */'
		// remove from '?' from type
		if requiredPrevLine {
			property := strings.TrimSpace(strings.Split(scanner.Text(), "?")[0])
			propertyMap[property] = true

			newString := strings.Replace(scanner.Text(), "?", "", -1)
			lines = append(lines, newString)

			// set flag that next line will contain property that needs to be mandatory
			requiredPrevLine = strings.Contains(scanner.Text(), "/** @required */")

			continue
		}

		if deprecatedPrevLine {
			// if line contain "?" means property has a non-primitive type, hence no need to redeclare it optional
			if strings.Contains(scanner.Text(), "?") {
				lines = append(lines, scanner.Text())
				continue
			}

			// make property optional and add '| undefined'
			newString := strings.Replace(scanner.Text(), ":", "?:", -1)
			newString = strings.Replace(newString, ";", " | undefined;", -1)

			lines = append(lines, newString)

			// get property name
			property := strings.TrimSpace(strings.Split(scanner.Text(), ":")[0])
			// check if property type is an array type
			deprecatedMap[property] = hasArrayType(newString)
			deprecatedPrevLine = false

			continue
		}

		// next line will contain property that needs to be treated as deprecated
		deprecatedPrevLine = strings.Contains(scanner.Text(), "/** @deprecated */")

		// set flag that next line will contain property that needs to be mandatory
		requiredPrevLine = strings.Contains(scanner.Text(), "/** @required */")

		// if current line contains "/** @required */" skip
		if strings.Contains(scanner.Text(), "/** @required */") {
			continue
		}

		// replace 'ServiceService' var names with 'Service'
		// e.g. 'UsersServiceService' to 'UsersService'
		if strings.Contains(scanner.Text(), "ServiceService") {
			newString := strings.Replace(scanner.Text(), "ServiceService", "Service", -1)
			lines = append(lines, newString)
			continue
		}

		// remove undefined expressions
		// e.g. 'message.updatedAt = undefined;' will be removed as its wrong after making 'updatedAt' mandatory
		if strings.Contains(scanner.Text(), "= undefined;") {
			propFound := false
			for prop := range propertyMap {
				messageProp := "message." + prop + " = undefined;"
				if strings.Contains(scanner.Text(), messageProp) {
					if strings.Contains(lines[len(lines)-1], "} else {") {
						// reset last line to '}' | prev: '} else {"
						lines[len(lines)-1] = strings.Replace(lines[len(lines)-1], "} else {", "}", -1)
						// skip next line as its an faulty '}'
						skipNextLine = true
						// e.g. 'message.updatedAt = undefined;' was found
						propFound = true
						break
					}
				}
			}
			if propFound {
				continue
			}
		}

		lines = append(lines, scanner.Text())
	}

	// last line in file should be empty
	lines = append(lines, "")
	output := strings.Join(lines, "\n")

	output = setDeprecatedFields(output, deprecatedMap)

	err = ioutil.WriteFile(filePath, []byte(output), 0644)
	if err != nil {
		log.Println("err", err)
	}
}

func setDeprecatedFields(output string, deprecatedMap map[string]bool) string {
	outputString := output
	for prop, hasArray := range deprecatedMap {
		if hasArray {
			// e.g. for (const v of message.top) --> for (const v of message.top ?? [])
			messagePropReplace := "of " + "message." + prop
			messagePropNew := "of " + "message." + prop + " ?? []"

			outputString = strings.Replace(outputString, messagePropReplace, messagePropNew, -1)
		} else {
			// e.g. if (message.annualCommission !== 0) --> if (message.annualCommission !== undefined && message.annualCommission !== 0)
			propIfReplace := "if (" + "message." + prop + " !=="
			propIfNew := "if (" + "message." + prop + " !== undefined && " + "message." + prop + " !=="

			outputString = strings.Replace(outputString, propIfReplace, propIfNew, -1)
		}
	}

	return outputString
}

func find(root, ext string) []string {
	var a []string
	filepath.WalkDir(root, func(s string, d fs.DirEntry, e error) error {
		if e != nil {
			return e
		}
		if filepath.Ext(d.Name()) == ext {
			a = append(a, s)
		}
		return nil
	})
	return a
}

func fileNameWithoutExtension(fileName string) string {
	return strings.TrimSuffix(fileName, filepath.Ext(fileName))
}
func capitalize(fileName string) string {
	return strings.Title(strings.ToLower(fileName))
}

func RunCMD(path string, args []string, debug bool) (out string, err error) {
	cmd := exec.Command(path, args...)

	var b []byte
	b, err = cmd.CombinedOutput()
	out = string(b)

	if debug {
		fmt.Println(strings.Join(cmd.Args[:], " "))

		if err != nil {
			fmt.Println("RunCMD ERROR")
			fmt.Println(out)
		}
	}

	return out, err
}

func hasArrayType(str string) bool {
	return strings.Contains(str, "[]")
}
