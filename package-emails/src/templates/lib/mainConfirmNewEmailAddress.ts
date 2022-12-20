import { Locales } from '@bitwala-cryptobank-squad/package-constants';

import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainConfirmNewEmailAddressVariables {
  firstName: string;
  deepLinkUrl: string;
}

export const mainConfirmNewEmailAddress = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SignUp
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainConfirmNewEmailAddress.title' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainConfirmNewEmailAddress.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainConfirmNewEmailAddress.textPart' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">${intl.formatMessage(
  { id: 'emails.mainConfirmNewEmailAddress.cta' },
  locale
)}</mj-button>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainConfirmNewEmailAddress.thanks' },
  locale
)}</mj-text>`;
