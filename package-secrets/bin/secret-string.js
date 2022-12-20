#!/usr/bin/env node
// it is better to copy these binaries to your local project

const { SecretsManager } = require('@bitwala-cryptobank-squad/package-secrets');
const secrets = new SecretsManager();

if (process.argv.length <= 2) {
  console.log('Missing arguments');
  process.exit(-1);
}

const secretFor = process.argv[2];

secrets
  .getEncryptedStringSecret({ secretFor })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    // console.log(err.message)
    process.exit(1);
  });
