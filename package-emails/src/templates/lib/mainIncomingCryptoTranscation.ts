import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainIncomingCryptoTransactionVariables {
  firstName: string;
  amountString: string;
  specificTransactionUrl: string;
  walletType: string;
}

export const mainIncomingCryptoTransaction = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SendBtc
}" alt="success"></mj-image>
<mj-text padding="16px">${intl.formatMessage(
  { id: 'emails.mainIncomingCryptoTransaction.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainIncomingCryptoTransaction.youHaveReceived' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="{{specificTransactionUrl}}">${intl.formatMessage(
  { id: 'emails.mainIncomingCryptoTransaction.cta' },
  locale
)}</mj-button>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainIncomingCryptoTransaction.thanks' },
  locale
)}</mj-text>`;
