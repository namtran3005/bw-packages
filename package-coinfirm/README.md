# Coinfirm API Wrapper

This package wrapped Coinfirm API for to check the BTC transactions against to anti-money laundering.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-coinfirm/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-coinfirm/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

### Usage

#### Options

**apiUrl:** Coinfirm API Url

**apiToken** A valid Coinfirm access token

**apiVersion** Coinfirm API version (Default is 'v2')

#### Methods

**getAMLReport(address: string, reportType: CoinfirmReportType)**

Gets AML report for given address from Coinfirm

_CoinfirmReportType {BASIC | STANDARD | FULL}_

```javascript
import Coinfirm, { CoinfirmOptions, AMLReportFull, CoinfirmReportType } from '@bitwala-cryptobank-squad/package-coinfirm';

const options: CoinfirmOptions = {
  apiUrl: String(process.env.COINFIRM_URL),
  apiToken: String(process.env.COINFIRM_TOKEN),
};

const coinfirm = new Coinfirm(options);

const report: AMLReportFull = await coinfirm.getAMLReport(addressToCheck!, CoinfirmReportType.FULL );

console.log('AML score', report.cscore);
```
