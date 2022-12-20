import fs from 'fs';

import { logger } from '@bitwala-cryptobank-squad/package-logger';
const log = logger('EMAILS_SCRIPTS');

import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import mjml2html from 'mjml';
import { TemplateNames, emails } from '../';

import { getFileName } from '../templates';

const buildHtml = async () => {
  log.info('Buildling HTML Templates');
  const templatesNames = Object.values(TemplateNames);
  const locales = Object.values(Locales);

  try {
    for (const templateName of templatesNames) {
      for (const locale of locales) {
        const fileName = getFileName(templateName, locale);

        log.info(`Building html for ${fileName}`);

        const mjml = emails.generateHTML(templateName, locale);

        const { html }: { html: string } = mjml2html(mjml, {
          minify: true,
        });

        /**
         * Until we upgrade to mjml 4.7.0 that supports custom-attributes, patch
         * the html output to add the SES 'ses:no-track' tag after the {{deepLinkUrl}} href
         */

        const patchedHtml = html.replace(
          /href="{{deepLinkUrl}}"/g,
          'href="{{deepLinkUrl}}" ses:no-track'
        );

        await fs.writeFileSync(`html/${fileName}.html`, patchedHtml, 'utf8');

        log.info(`${fileName} successfully created\n`);
      }
    }
  } catch (err) {
    log.error(err);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

buildHtml();
