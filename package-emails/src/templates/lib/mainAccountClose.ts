import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAccountCloseVariables {
  firstName: string;
  currentDateEN: string;
  currentDateDE: string;
}

export const mainAccountClose = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.TermsAndConditions
}" alt="locked"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAccountClose.title' },
  locale
)}</mj-text>
<mj-text mj-class="left bold">${intl.formatMessage(
  { id: 'emails.mainAccountClose.firstName' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountClose.received' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountClose.thisAlso' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountClose.effectiveToday' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountClose.teamNuri' },
  locale
)}</mj-text>`;
