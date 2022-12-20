import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainEmailChangedVariables {
  firstName: string;
  newEmail: string;
}

export const mainEmailChanged = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SignUp
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainEmailChanged.title' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainEmailChanged.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainEmailChanged.emailChanged' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainEmailChanged.notYou' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainEmailChanged.thanks' },
  locale
)}</mj-text>
<mj-text mj-class="sub-text">${intl.formatMessage(
  { id: 'emails.mainEmailChanged.availableHours' },
  locale
)}</mj-text>`;
