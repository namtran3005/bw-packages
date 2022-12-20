# Deployment process

## How to deploy a new version

To deploy a new version, you need to update the `package.json` version.

This will start the process of automation:

- It will tag the commit with the new package version.
- It will create a changelog with all the changes.
- It will build the package and publish it in our private registry.

This repository uses 4 GitHub actions:
- [public-actions/commit-autotag](https://github.bitwa.la/public-actions/commit-autotag): Tags the commits when the `package.json` version changes.
- [public-actions/generate-changelog-action](https://github.bitwa.la/public-actions/generate-changelog-action):  Generates the changelog and publishes the version in GitHub Releases.
- [public-actions/Prace.js](https://github.bitwa.la/public-actions/Prace.js): Pull Request linter. Ensures that we keep using the correct commit names in our Pull Requests.
- [public-actions/update-node-scoped-dependencies](https://github.bitwa.la/public-actions/update-node-scoped-dependencies): Cron job to check if any dependency has been updated. Ideally, this would be replaced by Dependabot when it is deployed inside GitHub enterprise edition.

# Git rules
Your commit messages have to be in this format:
```
type(category): description [flags]
```

Where `type` is one of the following:
*  `breaking`
*  `build`
*  `ci`
*  `chore`
*  `docs`
*  `feat`
*  `fix`
*  `other`
*  `perf`
*  `refactor`
*  `revert`
*  `style`
*  `test`

Where `flags` is an optional comma-separated list of one or more of the following (must be surrounded in square brackets):

*  `breaking`: alters `type` to be a breaking change

And `category` can be anything of your choice. If you use a type not found in the list (but it still follows the same format of the message), it'll be grouped under `other`.
