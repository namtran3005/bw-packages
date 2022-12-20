import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCardUnblockedBySbVariables {
  firstName: string;
}

export const mainCardUnblockedBySb = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Unlocked
}" alt="unblocked"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCardUnblockedBySb.cardUnlocked' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardUnblockedBySb.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardUnblockedBySb.happyToInform' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardUnblockedBySb.thanksForPatience' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardUnblockedBySb.thanks' },
  locale
)}</mj-text>`;
