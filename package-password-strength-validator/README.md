# password-strength-validator

Bitwala wrapper for `zxcvbn` and `owasp-password-strength-test` libraries.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-password-strength-validator/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-password-strength-validator/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Usage

Size of library is huge due to 'zxcvbn' as dependency. Please, use lazy loading for web apps.

```javascript
const validatePassword = async password => {
  const { validate } = await import(
    // webpackChunkName
    '@bitwala-cryptobank-squad/package-password-strength-validator'
  );

  const res = validate(password);

  //   ...
};
```
