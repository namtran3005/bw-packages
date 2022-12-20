# Split.io

Wrapper for split.io SDK

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-splitio/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-splitio/workflows/Continuous%20Testing/badge.svg?event=push)

## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

### Usage

```javascript
import { splitIo } from '@bitwala-cryptobank-squad/package-splitio';

splitIo.init({
  core: {
    authorizationKey: process.env.SPLIT_IO_AUTHORIZATION_KEY,
  },
});
```
