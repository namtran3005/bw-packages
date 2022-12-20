import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAccountSignupIneligibleVariables {
  firstName: string;
  url: string;
}

export const mainAccountSignupIneligible = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.MainAccountSignupIneligible
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAccountSignupIneligible.almostThere' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSignupIneligible.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSignupIneligible.thankYouForSignup' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSignupIneligible.pleaseConfirm' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button"><a ses:no-track href={{url}} />${intl.formatMessage(
  { id: 'emails.mainAccountSignupIneligible.cta' },
  locale
)}</a></mj-button>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountSignupIneligible.thanks' },
  locale
)}</mj-text>`;
