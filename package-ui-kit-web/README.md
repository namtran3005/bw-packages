# Upvest

Package Upvest.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-ui-kit-web/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-ui-kit-web/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

### Dependency hell

After killing yarn.lock and node_modules,
set the dependencies, such that they all resolve
in yarn's scope, then before commiting, remove them.
The end game is a yarn.lock file that makes sense.

resolutions can help a lot, ex.

```json
  "resolutions": {
    "**/@types/react": "17.0.3",
    "**/@types/react-dom": "17.0.3",
    "@bitwala-cryptobank-squad/package-constants": "file:../constants",
    "@material-ui/core": "4.8.3",
    "@date-io/date-fns": "1.3.13",
    "date-fns": "2.0.0-alpha.27",
    "**/react": "17.0.2",
    "**/react-dom": "17.0.2"
  }
```
