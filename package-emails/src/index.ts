export * from './templates';
export * from './schemas';
export * from './schemas/utils/removeUrlsAndScripts';

import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { TemplateNames, Templates, templates, wrapContent } from './templates';

export class Emails {
  private templates: Templates;

  constructor(templatesConfig: Templates) {
    this.templates = templatesConfig;
  }

  public generateHTML(templateName: TemplateNames, locale: Locales): string {
    const innerContent = this.templates[templateName](locale);

    return wrapContent(innerContent, locale);
  }
}

export const emails = new Emails(templates);
