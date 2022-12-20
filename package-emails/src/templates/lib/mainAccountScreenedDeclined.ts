import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAccountScreenedDeclinedVariables {
  firstName: string;
}

export const mainAccountScreenedDeclined = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.MainAccountSignupIneligible
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainAccountScreenedDeclined.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountScreenedDeclined.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountScreenedDeclined.body' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountScreenedDeclined.apology' },
  locale
)}</mj-text>

<mj-button mj-class="primary-button" href="mailto:support@nuri.com">
  ${intl.formatMessage(
    { id: 'emails.mainAccountScreenedDeclined.cta' },
    locale
  )}
</mj-button>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainAccountScreenedDeclined.thanks' },
  locale
)}</mj-text>`;
