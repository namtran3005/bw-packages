import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCryptoLendingWithdrawalSettledVariables {
  firstName: string;
  amount: string;
  deepLinkUrl: string;
}

export const mainCryptoLendingWithdrawalSettled = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.Withdraw
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalSettled.title' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalSettled.hi' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalSettled.yourInterest' },
    locale
  )}
</mj-text mj-class="left">

<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalSettled.cta' },
    locale
  )}
</mj-button>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalSettled.thanks' },
    locale
  )}
</mj-text>
`;
