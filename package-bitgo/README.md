# Bitgo

Package Bitgo.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-bitgo/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-bitgo/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

### How to use

```typescript
import { Bitgo } from '@bitwala-cryptobank-squad/package-bitgo';

export const bitgo = new Bitgo({
  // Environment can be 'test' (testnet) or 'production' (mainnet)
  environment: 'test',
  // Pass down you bitgo access token
  accessToken: process.env.BITGO_ACCESS_TOKEN,
});
```

### How to handle bitgo errors

By default we will throw the bitgo errors with a custom object.
This object contain the following properties:

- statusCode: number - The http status code of the request.
- error: string - The bitgo error message.
- name: string - The bitgo error name.
- requestId: string - The bitgo error requestId.
- context?: { [key: string]: any } - An optional field that can contain some context for the error.

You can handle errors the following way:

```typescript
import { BitgoError } from '@bitwala-cryptobank-squad/package-bitgo';

try {
  await bitgo.whateverCallToTheApi();
} catch (error) {
  if (error instanceof BitgoError) {
    // You can now access the BitgoError properties
    // For example the bitgo requestId
    console.log(error.requestId);
  }
  // otherwise another error happened
}
```
