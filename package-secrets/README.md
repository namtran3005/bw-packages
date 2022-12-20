# Package Secrets

Package Secrets

> Retrieves secrets from AWS Systems Manager Parameter Store

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-secrets/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-secrets/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

**Warning:** This package is not well-documented and uses a custom,
undocumented encryption scheme around values stored in AWS Systems Manager.
It's current user interface encourages copy-and-paste programming, namely to
embed the implementation of [./bin/secrets-json.js](bin/secrets-json.js) and
[./bin/secrets-string.js](bin/secrets-string.js) into each dependent package.

### Usage

An application uses `@bitwala-cryptobank-squad/package-secrets` to retrieve _some_ of its
runtime parameters from [AWS Secrets Manager][1] and then further decrypts the
received values using a secret value stored in the `MASTER_KEY` environment
variable. If `MASTER_KEY` is empty and `NODE_ENV` is not equal to `production`,
all environment variables are expected to contain plaintext and AWS Secrets
Manager is not used.

[1]: https://aws.amazon.com/secrets-manager/
