import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCryptoLendingAccountOpenedVariables {
  firstName: string;
  deepLinkUrl: string;
}

export const mainCryptoLendingAccountOpened = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.AccountOpened
}" alt="email"></mj-image>

<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCryptoLendingAccountOpened.title' },
  locale
)}</mj-text>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCryptoLendingAccountOpened.hi' },
  locale
)}</mj-text>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCryptoLendingAccountOpened.accountOpened' },
  locale
)}</mj-text mj-class="left">

<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">${intl.formatMessage(
  { id: 'emails.mainCryptoLendingAccountOpened.cta' },
  locale
)}</mj-button>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountOpened.tnc' },
    locale
  )}
</mj-text>

<mj-text mj-class="left"  padding-top="0px">
  <a href="${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountOpened.btncLink' },
    locale
  )}"
  target="_blank"
  rel="noopener noreferrer"
  >
    ${intl.formatMessage(
      { id: 'emails.mainCryptoLendingAccountOpened.btnc' },
      locale
    )}
  </a>
  <br />
  <a href="${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountOpened.rwnLink' },
    locale
  )}"
  target="_blank"
  rel="noopener noreferrer"
  >
    ${intl.formatMessage(
      { id: 'emails.mainCryptoLendingAccountOpened.rwn' },
      locale
    )}
  </a>
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingAccountOpened.thanks' },
    locale
  )}
</mj-text>
`;
