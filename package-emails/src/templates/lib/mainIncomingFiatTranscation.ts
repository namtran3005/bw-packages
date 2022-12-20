import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainIncomingFiatTransactionVariables {
  firstName: string;
  amountString: string;
  specificTransactionUrl: string;
}

export const mainIncomingFiatTransaction = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Success
}" alt="success"></mj-image>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainIncomingFiatTransaction.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainIncomingFiatTransaction.youHaveReceived' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="{{specificTransactionUrl}}">${intl.formatMessage(
  { id: 'emails.mainIncomingFiatTransaction.cta' },
  locale
)}</mj-button>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainIncomingFiatTransaction.thanks' },
  locale
)}</mj-text>`;
