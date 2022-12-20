import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAccountFreezeVariables {
  reason: string;
  firstName?: string;
}

export const mainAccountFreeze = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Locked
}" alt="locked"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAccountFreeze.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountFreeze.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountFreeze.thisMeans' },
  locale
)}</mj-text>
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainAccountFreeze.apologies' },
    locale
  )}</mj-text>
<mj-button mj-class="primary-button" href="${intl.formatMessage(
  { id: 'emails.mainAccountFreeze.supportLink' },
  locale
)}">${intl.formatMessage(
  { id: 'emails.mainAccountFreeze.cta' },
  locale
)}</mj-button>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountFreeze.teamNuri' },
  locale
)}</mj-text>`;
