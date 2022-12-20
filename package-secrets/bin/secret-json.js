#!/usr/bin/env node
// it is better to copy these binaries to your local project
const { SecretsManager } = require('@bitwala-cryptobank-squad/package-secrets');
const secrets = new SecretsManager();

if (process.argv.length <= 3) {
  console.log('Missing arguments');
  process.exit(-1);
}

const secretFor = process.argv[2];
const attribute = process.argv[3];

secrets
  .getEncryptedJSONSecret({ secretFor, attribute })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    // console.log(err.message)
    process.exit(1);
  });
