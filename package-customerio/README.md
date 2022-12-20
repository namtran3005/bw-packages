# Customerio

A customer package to send events to customer.io

The current customer.io client doesn't support that

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-customerio/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-customerio/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

## Usage

```javascript
// track opened push notifications
import { trackOpenedNotifications } from '@bitwala-cryptobank-squad/package-customerio';

trackOpenedNotifications(
  (data: {
    'CIO-Delivery-ID': 'xxx',
    'CIO-Delivery-Token': 'xxx',
    ...
  })
);
```
