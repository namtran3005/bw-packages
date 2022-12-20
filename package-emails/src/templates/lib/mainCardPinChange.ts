import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCardPinChangeVariables {
  firstName: string;
}

export const mainCardPinChange = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Password
}" alt="password"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCardPinChange.pinSet' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardPinChange.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardPinChange.pinChangeSuccess' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardPinChange.thanks' },
  locale
)}</mj-text>`;
