import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainRejectSolarisTandCVariables {
  firstName: string;
  date: string;
  TandCUrl: string;
  TandCInformation: string;
  TandCConsequences: string;
}

export const mainRejectSolarisTandC = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.TermsAndConditions
}" alt="email"></mj-image>
  <mj-text mj-class="h2">${intl.formatMessage(
    { id: 'emails.mainRejectSolarisTandC.subject' },
    locale
  )}</mj-text>
  <mj-text>${intl.formatMessage(
    { id: 'emails.mainRejectSolarisTandC.hi' },
    locale
  )}</mj-text>
  <mj-text>${intl.formatMessage(
    { id: 'emails.mainRejectSolarisTandC.rejectedText' },
    locale
  )}
</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainRejectSolarisTandC.whatIsChanged' },
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
  { id: 'emails.mainRejectSolarisTandC.consequences' },
  locale
)}</mj-text>
  <mj-text>{{TandCConsequences}}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainRejectSolarisTandC.questions' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainRejectSolarisTandC.thanks' },
  locale
)}</mj-text>`;
