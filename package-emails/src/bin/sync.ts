import fs from 'fs';
import { promisify } from 'util';
import AWS from 'aws-sdk';
import { Locales } from '@bitwala-cryptobank-squad/package-constants';

import { logger } from '@bitwala-cryptobank-squad/package-logger';
import { getSubject, getTextPart, TemplateNames } from '../index';
import { getFileName } from '../templates';

const sleep = promisify(setTimeout);
const log = logger('EMAILS_SCRIPTS');

const ses = new AWS.SES({ region: 'eu-west-1' });

const sync = async () => {
  const env = process.env.NODE_ENV || '';
  let awsProfile = '';
  if (env.startsWith('playground')) {
    awsProfile = `${env.substring(env.length - 2)}-playground`;
    const creds = new AWS.SharedIniFileCredentials({
      profile: awsProfile,
    });
    AWS.config.credentials = creds;
  }

  log.info(`Syncing email templates to AWS ${awsProfile}`);

  const templates = Object.values(TemplateNames);
  const locales = Object.values(Locales);

  try {
    for (const templateName of templates) {
      for (const locale of locales) {
        const subject = getSubject(templateName, locale);
        const textPart = getTextPart(templateName, locale);
        const fileName = getFileName(templateName, locale);
        const html = await fs.readFileSync(`html/${fileName}.html`, 'utf8');

        log.info(`${fileName} is about to be deployed...`);
        log.info(`Subject: ${subject}`);
        log.info(`TextPart: ${textPart}`);

        await deploy(fileName, subject, textPart, html);

        log.info(`${fileName} successfully deployed\n`);
      }
    }
  } catch (err) {
    log.error(err);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

let retryCount = 0;
const maxRetries = 5;

const deploy = async (
  templateName: string,
  subject: string,
  textPart: string,
  html: string
) => {
  try {
    try {
      await checkTemplate(templateName);
      log.info(`Update template ${templateName}`);
      await updateTemplate({
        templateName,
        subject,
        textPart,
        html,
      });
    } catch (e) {
      if (e.code === 'TemplateDoesNotExist') {
        log.info(`Creating new template... ${templateName}`);
        await createTemplate({
          templateName,
          subject,
          textPart,
          html,
        });
      } else {
        throw e;
      }
    }
    retryCount = 0; // reset retry counter after successful operation
  } catch (e) {
    if (e.code === 'Throttling') {
      // AWS only allows 1 request/sec for the SES API
      if (retryCount === maxRetries) {
        throw new Error(`Too many retries (${retryCount}), exiting!`);
      }

      // exponential backoff
      const sleepTimeInSeconds = 2 ** retryCount;
      log.info(`Rate limited. Sleeping for ${sleepTimeInSeconds} seconds...`);
      await sleep(sleepTimeInSeconds * 1000);

      retryCount++;
      deploy(templateName, subject, textPart, html);
    } else {
      throw new Error(
        `Error while checking template ${templateName}: ${e.message}`
      );
    }
  }
};

const checkTemplate = (templateName: string) =>
  ses
    .getTemplate({
      TemplateName: templateName,
    })
    .promise();

const createTemplate = ({
  templateName,
  html,
  subject,
  textPart,
}: {
  [key: string]: string;
}) => {
  return ses
    .createTemplate({
      Template: {
        TemplateName: templateName,
        HtmlPart: html,
        SubjectPart: subject,
        TextPart: textPart,
      },
    })
    .promise();
};

const updateTemplate = ({
  templateName,
  html,
  subject,
  textPart,
}: {
  [key: string]: string;
}) =>
  ses
    .updateTemplate({
      Template: {
        TemplateName: templateName,
        HtmlPart: html,
        SubjectPart: subject,
        TextPart: textPart,
      },
    })
    .promise();

sync();
