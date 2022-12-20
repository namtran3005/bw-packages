React Native Cryptography & Keychain.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-react-native-crypto-keychain/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-react-native-crypto-keychain/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Why we need this?

1. Device Pairing: We need the pair user's device with him/her account to secured communication. (Such as resolve challenge with device has a private key to login)

2. Wallet Creation: The user can store the wallet seed as encrypted with generated unique symmetric key on his/her device's secure hardware.

## How it works

Mobile devices use dedicated secure hardware for storing generated secure keys.
_(Secure Enclave on iOS (+iPhone5S) and Secure Element (SE), Trusted Execution Environment (TEE) or StrongBox on Android devices (+Android 6.0))_

The library methods allow us to use and access to device secure hardware for storing sensitive data on it.

### On iOS

It creates private/public keypair with 256bit Elliptic Curve algorithm (`secp256k1`) and saves the private key in Secure Enclave. The private key is not exportable and accesible only via our app and protected by device's pin/passcode/biometry.

iOS has a built-in Keychain to store sensitive data (encrypted by default) So, the library uses native API to access and modify the data which are stored in Keychain

### On Android

It creates private/public keypair with Elliptic Curve algorithm (`secp256r1`) and saves the private key in SE/TEE/Strongbox. The private key is not exportable and accessible only via our app and protected by device's pin/pattern/password/biometry.

Android has not a Keychain like iOS so, the library has a Keychain implementation very similar to iOS Keychain model. It stores the data on SQLite database with encryption. It uses 256bit AES algoithm.

Wallet data and keychain data stores in seperated tables and it generates unique symmetric key for each wallet. But, it uses same symmetric key for Keychain operations.

## Installation

`$ yarn lerna add --scope=@bitwala/main-native --exact @bitwala/react-native-crypto-keychain`

## Usage

All methods return `Promise`

Creating instance

```js
const options: VarnasseOptions = {
  authenticationPrompt: 'Please authenticate to continue the process', // iOS only
  biometryTitle: 'Bitwala', // Android only
  biometrySubTitle: 'Please authenticate to continue the process', // Android only
  biometryDescription: 'Your data protected by your device authentication.', // Android only
  biometryCancelText: 'CANCEL', // Android only
};
const Keychain = new Varnasse(options);
```

Device Binding Methods

```js
const result = await Keychain.createPairingKeys();
// returns public key in PEM format

const result = await Keychain.deletePairingKeys();
// returns boolean

const result = await Keychain.getPairingPublicKey();
// returns public key in PEM format

const data = 'q1w2e3r4';
const result = await Keychain.signWithPairingKey(data);
// returns signature (in Base 64 formatted)

const signature =
  'TmbSokfHLD9ZziwOam564B3Z7H07XsqHCMyJcDHhlZewmOz2fdLXr1Tq65ivhUD0b+grCdWy/X1rl6/MjcZogpr98g5o+4g==';
const data = 'q1w2e3r4';
const result = await Keychain.verifyWithPairingKey(data, signature);
// returns boolean

const hasKeys = await Keychain.hasPairingKeys();
// returns boolean

const isKeyInSecureHW = await Keychain.isPairingKeyInSecureHW();
// returns boolean
```

Wallet Operation Methods

```js
const ownerId = '5cfa6165f8165497a989d852';
const walletAddress = '0xAe61E897D7a59072D22b955624E406fD22c1694a';

const data: WalletData = {
  owner: '5cfa6165f8165497a989d852',
  coin: 'eth',
  address: '0xAe61E897D7a59072D22b955624E406fD22c1694a',
  seed: 'wallet-super-secret-seeds-will-be-encrypted',
};
const result = await Keychain.saveWalletData(data);
// returns boolean

const result = await Keychain.getWalletData(ownerId, walletAddress);
// returns WalletData object if found
console.log('Owner: ', result.owner);
console.log('Coin: ', result.coin);
console.log('Seed: ', result.seed);
console.log('Address: ', result.address);

const result = await Keychain.deleteWalletData(ownerId, walletAddress);
// returns boolean

const result = await Keychain.isWalletKeyInSecureHW(walletAddress);
// returns boolean
```

Secure Keychain Methods

```js
const label = 'unique-label';
const key = 'key-name';
const value = 'some-data-to-be-stored-in-key-chain';
const result = await Keychain.saveToKeychain(label, key, value);
// returns boolean

const newValue = 'UPDATED-data-to-be-stored-in-key-chain';
const result = await Keychain.updateKeychain(label, key, newValue);
// returns boolean if new value saved successfully

const result = await Keychain.getFromKeychain(label, key);
// returns KeychainData object if found
console.log('Key: ', result.key);
console.log('Value: ', result.value);

const result = await Keychain.deleteFromKeychain(label, key);
// returns boolean
```

Helper Methods

```js
const result = await Keychain.isBiometryEnabled();
// returns boolean

// If you need to change message on authentication screen
const options: VarnasseOptions = {
  authenticationPrompt: 'New prompt message', // iOS only
  biometryTitle: 'New title', // Android only
  biometrySubTitle: 'New sub title', // Android only
  biometryDescription: 'New description.', // Android only
  biometryCancelText: 'Cancel', // Android only
};
Keychain.updateOptions();
```
