import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAcceptSolarisTandCVariables {
  firstName: string;
  date: string;
  TandCInformation: string;
}

export const mainAcceptSolarisTandC = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.TermsAndConditions
}" alt="email"></mj-image>
  <mj-text mj-class="h2">${intl.formatMessage(
    { id: 'emails.mainAcceptSolarisTandC.subject' },
    locale
  )}</mj-text>
  <mj-text>${intl.formatMessage(
    { id: 'emails.mainAcceptSolarisTandC.hi' },
    locale
  )}</mj-text>
  <mj-text>${intl.formatMessage(
    { id: 'emails.mainAcceptSolarisTandC.acceptedText' },
    locale
  )}
</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAcceptSolarisTandC.whatIsChanged' },
  locale
)}</mj-text>
<mj-text>
    <ul style="margin-bottom: 0;margin-top: 0;">
        <li>
            {{TandCInformation}}
        </li>
    </ul>
</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAcceptSolarisTandC.referenceOnly' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAcceptSolarisTandC.thanks' },
  locale
)}</mj-text>`;
