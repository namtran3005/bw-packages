import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainSolarisTandCUpdateVariables {
  firstName: string;
}

export const mainSolarisTandCUpdate = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.TermsAndConditions
}" alt="email"></mj-image>
  <mj-text mj-class="h2">${intl.formatMessage(
    { id: 'emails.mainSolarisTandCUpdate.subject' },
    locale
  )}</mj-text>
  <mj-text>${intl.formatMessage(
    { id: 'emails.mainSolarisTandCUpdate.hi' },
    locale
  )}</mj-text>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainSolarisTandCUpdate.declateListTitle' },
  locale
)}</mj-text>
<mj-text mj-class="left">
  <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCUpdate.declareStep1' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCUpdate.declareStep2' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCUpdate.declareStep3' },
      locale
    )}</li>
  </ul>
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCUpdate.agreeChangesInfo' },
  locale
)}
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCUpdate.thanks' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCUpdate.teamNuri' },
  locale
)}</mj-text>`;
