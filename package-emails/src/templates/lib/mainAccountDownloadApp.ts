import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAccountDownloadAppVariables {
  firstName: string;
  url: string;
}

export const mainAccountDownloadApp = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.DownloadMobileApp
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left" padding-bottom="0">${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.thankYouForSignup' },
  locale
)}</mj-text>
<mj-text mj-class="left" padding-bottom="0">
    <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountDownloadApp.stepOne' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountDownloadApp.stepTwo' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainAccountDownloadApp.stepThree' },
      locale
    )}</li>
    </ul>
</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.downloadLinkIntro' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button"><a ses:no-track href={{url}} />${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.cta' },
  locale
)}</a></mj-button>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.conclusion' },
  locale
)}</mj-text>
<mj-text mj-class="left" padding-bottom="0">${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.signature' },
  locale
)}</mj-text>
<mj-text mj-class="left">P.S.: ${intl.formatMessage(
  { id: 'emails.mainAccountDownloadApp.ps' },
  locale
)}</mj-text>
`;
