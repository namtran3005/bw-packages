/* eslint-disable import/order */
import 'reflect-metadata'

import async from 'async'
import fs from 'fs-extra'
import _ from 'lodash'
import path from 'path'
import prettier from 'prettier'

import { config } from './lib/config'
import { getComponents, getImages } from './lib/figma'
import {
  generateComponent,
  setupDirectories,
  generateStory,
  IGenerated,
} from './lib/generate-files'
import { logger } from './lib/logger'

const processFile = async (type: 'icon' | 'illustration', file: string) => {
  logger.info(`reading ${type}s from figma...`)
  const components = await getComponents(file)
  const images = await getImages(components, file)
  let count = 0
  const generatedComponents: IGenerated[] = []
  await async.eachLimit(components, 30, async (component) => {
    try {
      const generatedComponent = await generateComponent(
        component,
        images[component.nodeId],
        type
      )
      await generateStory(component, type)
      generatedComponents.push(generatedComponent)
    } catch (err) {
      logger.warn(`${component.name}: ${err.message.trim()}`)
    } finally {
      count += 1
      logger.info(
        `[${count} of ${components.length}] downloaded ${component.name} `
      )
    }
  })
  return generatedComponents
}

const start = async () => {
  await setupDirectories()

  const icons = await processFile('icon', config.figma.files.icons)
  const illustrations = await processFile(
    'illustration',
    config.figma.files.illustrations
  )
  const generated = [...icons, ...illustrations]
  const index = `
  ${_.orderBy(_.uniq(generated.map((gen) => gen.importStatement))).join('\n')}
  export {
    ${_.orderBy(_.uniq(generated.map((gen) => gen.componentName))).join(',\n')}
  }
  `
  const formattedIndex = prettier.format(index, {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    // @ts-ignore
    importOrderParserPlugins: ['typescript', 'decorators-legacy'],
    importOrder: ['^reflect-metadata$', '<THIRD_PARTY_MODULES>', '^[./]'],
    importOrderSeparation: true,
    parser: 'babel-ts',
  })
  await fs.writeFile(path.resolve(__dirname, './index.ts'), formattedIndex)
}

if (require.main === module) {
  start()
}
