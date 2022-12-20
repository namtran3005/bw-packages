import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainSolarisTandCAnnouncementVariables {
  firstName: string;
}

export const mainSolarisTandCAnnouncement = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.TermsAndConditions
}" alt="email"></mj-image>
  <mj-text mj-class="h2">${intl.formatMessage(
    { id: 'emails.mainSolarisTandCAnnouncement.subject' },
    locale
  )}</mj-text>
  <mj-text>${intl.formatMessage(
    { id: 'emails.mainSolarisTandCAnnouncement.hi' },
    locale
  )}</mj-text>
  <mj-text>${intl.formatMessage(
    { id: 'emails.mainSolarisTandCAnnouncement.consentInfo' },
    locale
  )}
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.updateAppInfo' },
  locale
)}
</mj-text>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.declateListTitle' },
  locale
)}</mj-text>
<mj-text mj-class="left">
  <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCAnnouncement.declareStep1' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCAnnouncement.declareStep2' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCAnnouncement.declareStep3' },
      locale
    )}</li>
  </ul>
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.rejectChangesInfo' },
  locale
)}
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.agreeChangesInfo' },
  locale
)}
</mj-text>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.whatIsChangedListTitle' },
  locale
)}</mj-text>
<mj-text mj-class="left">
  <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCAnnouncement.whatIsChangedStep1' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainSolarisTandCAnnouncement.whatIsChangedStep2' },
      locale
    )}</li>
  </ul>
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.accessDocuments' },
  locale
)}
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.accessDocumentsInfo' },
  locale
)}
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.questions' },
  locale
)}
</mj-text>

<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.thanks' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainSolarisTandCAnnouncement.teamNuri' },
  locale
)}</mj-text>`;
