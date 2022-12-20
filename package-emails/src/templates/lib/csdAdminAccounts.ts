import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';

export interface CsdAdminAccountsVariables {
  message: string;
}

export const csdAdminAccounts = (locale: Locales) =>
  `<mj-text mj-class="h2">${intl.formatMessage(
    { id: 'emails.csdAdminAccounts.adminMessage' },
    locale
  )}</mj-text>
  <mj-text padding="16px" mj-class="left">{{message}}</mj-text>`;
