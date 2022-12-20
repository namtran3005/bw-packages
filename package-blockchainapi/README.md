# Package blockchainapi

Template repository for creating new packages with CI already integrated.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-blockchainapi/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-blockchainapi/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Installation requirement

Before you can install any package from the GitHub Package Registry, 
you need to have follow the steps in our guide: 
[How to authenticate with GitHub Package Registry](https://bitwala-gmbh.atlassian.net/wiki/spaces/IT/pages/1736048669/How+to+authenticate+for+GitHub+Package+Registry).

## Package information

Here you should have all the information about your package. You can find how to correctly setup this package in [Package Repository Setup](https://bitwala-gmbh.atlassian.net/wiki/spaces/IT/pages/1784741959/Package+repository+setup) and how to develop it in [How to create a new package](https://bitwala-gmbh.atlassian.net/wiki/spaces/IT/pages/1787297831/How+to+create+a+new+package).

But for now let's talk about this template to add some boilerplate.

It was developed by the brilliant, eloquent, genius, funny and not at all narcissistic [Javier Bullrich](mailto:javier.bullrich@bitwala.com) as a proposal for the Mobile Platform Team. The whole document is available here: [Packages Isolation from the Monorepository](https://bitwala-gmbh.atlassian.net/wiki/spaces/BUIL/pages/1398571126/Packages+isolation+from+the+monorepository).

This boilerplate library is a simple function called `start` which receives a string and it returns it inside a hello message. The function itself is the following:
```ts
function start(name:string){
	return `Hello My ${name}!`;
}
```

What else can I say? The current price of Bitcoin is **48,499 USD**, today I had a black coffee and a traditional Argentinian mate and I hate gooses, that animal is very mean. They bully other type of ducks for fun.

You should have removed all this text once you create a repo from this template, else this will be embarrassing for me.
