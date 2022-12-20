# Crypto Utils Module

This module includes miscellaneous utils, functions related to crypto currencies and blockchain.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-crypto-utils/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-crypto-utils/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Transaction Address Finder

Extracts wallet address from transaction document

### Functions

- getRecipientEntryAddress(bitcoinTxnDoc): string | null
- getSenderEntryAddress(bitcoinTxnDoc): string | null
- isIncomingTxn(bitcoinTxnDoc): boolean
- getOtherAddressFromTx(bitcoinTxnDoc): string | null _Returns sender address if is incoming trx otherwise receipent's_
