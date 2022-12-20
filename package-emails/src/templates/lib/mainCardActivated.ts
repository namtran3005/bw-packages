import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCardActivatedVariables {
  firstName: string;
  lastName: string;
}

export const mainCardActivated = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.CardActivated
}" alt="activated"></mj-image>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.hi' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.cardActivated' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.info' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.firstItem' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.firstItemText' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.secondItem' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.canAccessSettingsText' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.firstSetting' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.secondSetting' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.thirdSetting' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainCardActivated.finalLine' },
  locale
)}</mj-text>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainCardActivated.thanks' },
  locale
)}</mj-text>`;
