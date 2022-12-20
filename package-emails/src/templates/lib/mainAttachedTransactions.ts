import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';

export interface MainAttachedTransactionsVariables {
  firstName: string;
}

export const mainAttachedTransactions = (
  locale: Locales
) => `<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAttachedTransactions.title' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAttachedTransactions.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAttachedTransactions.content' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAttachedTransactions.thanks' },
  locale
)}</mj-text>`;
