import { Locales } from '@bitwala-cryptobank-squad/package-constants';

import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainConfirmCurrentEmailAddressVariables {
  firstName: string;
  deepLinkUrl: string;
}

export const mainConfirmCurrentEmailAddress = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SignUp
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainConfirmCurrentEmailAddress.title' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainConfirmCurrentEmailAddress.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainConfirmCurrentEmailAddress.textPart' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">${intl.formatMessage(
  { id: 'emails.mainConfirmCurrentEmailAddress.cta' },
  locale
)}</mj-button>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainConfirmCurrentEmailAddress.thanks' },
  locale
)}</mj-text>`;
