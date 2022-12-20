# Emails Package

Package emails.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-emails/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-emails/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

To deploy the `playground-og` templates do:

1. `export NODE_ENV=playground-og`
2. `yarn deploy`

# Troubleshootings

## Playground deployment

ERROR: `The security token included in the request is invalid.`
ERROR: `Missing credentials`

Please create Aws profile on your machine.
`aws configure --profile cb-playground`
