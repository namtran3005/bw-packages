import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { Emails, templates, TemplateNames } from '../';

const emails = new Emails(templates);

describe('Email class', () => {
  it('Should generate emails', () => {
    const html = emails.generateHTML(
      TemplateNames.MainResetPassword,
      Locales.en
    );
    expect(html).toMatchSnapshot();
  });
});
