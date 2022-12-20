import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCryptoTaxReportGeneratedVariables {
  firstName: string;
  deepLinkUrl: string;
}

export const mainCryptoTaxReportGenerated = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.ClipBoard
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoTaxReportGenerated.title' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoTaxReportGenerated.hey' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoTaxReportGenerated.done' },
    locale
  )}
</mj-text mj-class="left">

<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoTaxReportGenerated.cta' },
    locale
  )}
</mj-button>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoTaxReportGenerated.thanks' },
    locale
  )}
</mj-text>
`;
