# Misc utils package

This is a proper place for putting helpers which don't seem like fitting to some exact domain

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-utils/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-utils/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

# Package information

## `exports.money`

### `convertAmount(amount: Amount, unit?: Unit): Amount`

Takes an amount of money and optional desired output unit and converts the amount.
E.g. converts amount in cents to amount in euros.
If the desired amount is not specified - converts to base amount, which is defined in `money.currencyConfig` and normally is the whole money unit.

Example:

```javascript
import { money, Currencies, Unit } from '@bitwala-cryptobank-squad/package-utils';

const input = {
  value: 100,
  unit: Unit.CENTS,
  currency: Currencies.EUR,
};

const output = money.convertAmount(input);
```

Output will be:

```javascript
{
  value: 1,
  unit: 'BASE',
  currency: 'EUR'
}
```
