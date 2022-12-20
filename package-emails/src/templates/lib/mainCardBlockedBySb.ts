import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCardBlockedBySbVariables {
  firstName: string;
}

export const mainCardBlockedBySb = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.LockedCard
}" alt="locked-card"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCardBlockedBySb.cardLocked' },
  locale
)}</mj-text mj-class="left">
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardBlockedBySb.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardBlockedBySb.weRegretToInform' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardBlockedBySb.toUnlock' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="mailto:support@nuri.com">${intl.formatMessage(
  { id: 'emails.mainCardBlockedBySb.cta' },
  locale
)}</mj-button>
<mj-text my-class="left">${intl.formatMessage(
  { id: 'emails.mainCardBlockedBySb.thanks' },
  locale
)}</mj-text>`;
