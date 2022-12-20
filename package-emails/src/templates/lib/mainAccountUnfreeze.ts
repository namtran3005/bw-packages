import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAccountUnfreezeVariables {
  firstName: string;
  url: string;
}

export const mainAccountUnfreeze = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Unlocked
}" alt="unfreeze"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAccountUnfreeze.accountUnlocked' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAccountUnfreeze.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAccountUnfreeze.weAreHappyToInform' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAccountUnfreeze.thanksForPatience' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="{{url}}">${intl.formatMessage(
  { id: 'emails.mainAccountUnfreeze.cta' },
  locale
)}</mj-button>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAccountUnfreeze.thanks' },
  locale
)}</mj-text>`;
