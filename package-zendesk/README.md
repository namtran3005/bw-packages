# Bitwala Zendesk API

Typed wrapper for Zendesk API which defaults to logging for non production environment

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-zendesk/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-zendesk/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Package information

```ts
import zendesk from '@bitwala-cryptobank-squad/package-zendesk';

zendesk
    .createTicket({
    email: 'ben@bitwa.la',
    subject: 'Account Closure Request',
    description: 'I would like to request that my account be closed.',
    priority: 3
    status: 2,
    tags: ['REQUESTED FROM WITHIN ACCOUNT'],
    type: 'Request',
    custom_fields: {
        cf_topic: 'Account',
        cf_specifics_account: 'Account Closure',
    },
    })
    .then(console.log)
    .catch(err => console.log(JSON.stringify(err)));
```
