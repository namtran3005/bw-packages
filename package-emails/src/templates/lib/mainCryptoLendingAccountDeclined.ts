import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCryptoLendingAccountDeclinedVariables {
  firstName: string;
}

export const mainCryptoLendingAccountDeclined = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.AccountDeclined
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountDeclined.title' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountDeclined.hi' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountDeclined.accountDeclined' },
    locale
  )}
</mj-text mj-class="left">

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountDeclined.questions' },
    locale
  )}
</mj-text mj-class="left">

<mj-button mj-class="primary-button" href="mailto:support@nuri.com">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountDeclined.cta' },
    locale
  )}
</mj-button>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountDeclined.thanks' },
    locale
  )}
</mj-text>
`;
