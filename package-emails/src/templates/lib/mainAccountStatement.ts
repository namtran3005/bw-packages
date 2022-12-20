import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';

export interface MainAccountStatementVariables {
  firstName: string;
}

export const mainAccountStatement = (
  locale: Locales
) => `<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAccountStatement.title' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAccountStatement.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAccountStatement.content' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAccountStatement.thanks' },
  locale
)}</mj-text>`;
