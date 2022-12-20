import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCardClosedBySbVariables {
  firstName: string;
  bitwalaWebUrl: string;
}

export const mainCardClosedBySb = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.LockedCard
}" alt="locked-card"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCardClosedBySb.cardClosed' },
  locale
)}</mj-text mj-class="left">
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardClosedBySb.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardClosedBySb.weRegretToInform' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardClosedBySb.pleaseNote' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardClosedBySb.weApologise' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="{{bitwalaWebUrl}}">${intl.formatMessage(
  { id: 'emails.mainCardClosedBySb.cta' },
  locale
)}</mj-button>
<mj-text my-class=""left">${intl.formatMessage(
  { id: 'emails.mainCardClosedBySb.thanks' },
  locale
)}</mj-text>`;
