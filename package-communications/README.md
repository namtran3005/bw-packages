# Communications Module

Firstly please read the docs in Sending_emails_sms_push_notifications.md
⚠️ Sending communications using the communications module directly, is not recommend. You will skip the business logic part.

![Continuous Integration](https://github.bitwa.la/bitwala-cryptobank-squad/package-communications/workflows/Continuous%20Integration/badge.svg)

![Continuous testing](https://github.bitwa.la/bitwala-cryptobank-squad/package-communications/workflows/Continuous%20Testing/badge.svg?event=push)


## Deployment information

There are some required steps to deploy a new version, you can read about them in the [DEPLOYMENT.md](DEPLOYMENT.md) file.

## Setup required

We currently have two communication modules, `PushCommunication` and `EmailCommunication`.

As the names indicates, one is for push and the other one is for emails.

#### Email Setup

The email communications module constructor accepts two types of parameters: `EmailConfigInterface` and `RegionConfigInterface`.

```ts
export interface EmailConfigInterface {
  replyToAddress: string;
  source: string;
  awsRegion?: string;
}

export interface RegionConfigInterface {
  awsRegion: string;
}
```

This values are optional and not required.

Right now we have our SES instance in `eu-west-1`, so, when setting up the aws region, be sure to set that up.

You can find the complete interface with it's methods in [EmailCommunicationsInterface](./src/types/EmailCommunicationsInterface.ts)

#### Push Notification Setup

The push communications module constructor requires one parameter: `RegionConfigInterface`.

```ts
export interface RegionConfigInterface {
  awsRegion: string;
}
```

Right now we have our SNS instance in `eu-central-1`, so be sure to set it as that one.

You can find the complete interface with it's methods in [PushCommunicationsInterface](./src/types/PushCommunicationsInterface.ts)

### Usage

```ts
 // This is just an example of implementation of the communication module.

     // Send templated emails
    communications.sendEmail({
      to: 'alessio@bitwala.com',
      template: 'main-reset_password-en',
      variables: {
        firstName: 'Satoshi',
        ip: '127.0.0.1'
      }
    });

    // Send sms
    communications.sendSMS({
      to: '+49xxxxycxy', // <- without the 0 for german numbers. e.g. +49176, not +490176
      subject: 'Test',
      message: `It has been created a new Role. The new role is ${role.name} and the permissions are ${role.permissions.toString() || 'none'}`
    });

    // Send bulk templated emails
    communications.sendBulkTemplateMail({
      destination: [
        {
            toAddress: 'alessio@bitwala.com',
            variables: {
                ammout: '50',
                currency: '€',
                atmLocation: 'Sparkasse Alexanderplatz'
            }
        }
      ],
      template: 'main-atm_withdraw_confirmation-en'
    })
```

### FAQ

_How do I create an email template?_

Check the Sending_emails_sms_push_notifications.md doc

### Todos

- Push notifications
