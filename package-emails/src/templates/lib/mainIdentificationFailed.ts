import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainIdentificationFailedVariables {
  firstName: string;
}

export const mainIdentificationFailed = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.AccountDeclined
}" alt="success"></mj-image>
<mj-text mj-class="left" padding-botttom="16px">${intl.formatMessage(
  { id: 'emails.mainIdentificationFailed.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainIdentificationFailed.weRegretToInform' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainIdentificationFailed.contactSupport' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainIdentificationFailed.weApologise' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="mailto:support@nuri.com">${intl.formatMessage(
  { id: 'emails.mainIdentificationFailed.cta' },
  locale
)}</mj-button>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainIdentificationFailed.thanks' },
  locale
)}</mj-text>`;
