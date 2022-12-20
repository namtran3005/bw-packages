import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCryptoLendingInvestmentSettledVariables {
  firstName: string;
  amount: string;
  deepLinkUrl: string;
}

export const mainCryptoLendingInvestmentSettled = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.PiggyPercentage
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentSettled.title' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentSettled.hi' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentSettled.yourInterest' },
    locale
  )}
</mj-text mj-class="left">

<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentSettled.cta' },
    locale
  )}
</mj-button>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentSettled.thanks' },
    locale
  )}
</mj-text>
`;
