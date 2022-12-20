import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainPasswordChangedVariables {
  firstName: string;
}

export const mainPasswordChanged = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Keys
}" alt="keys"></mj-image>
        <mj-text mj-class="h2">${intl.formatMessage(
          { id: 'emails.mainPasswordChanged.title' },
          locale
        )}</mj-text>
        <mj-text>${intl.formatMessage(
          { id: 'emails.mainPasswordChanged.hi' },
          locale
        )}</mj-text>
        <mj-text>${intl.formatMessage(
          { id: 'emails.mainPasswordChanged.passwordChanged' },
          locale
        )}</mj-text>
        <mj-text>${intl.formatMessage(
          { id: 'emails.mainPasswordChanged.contactSupport' },
          locale
        )}</mj-text>
        <mj-text>${intl.formatMessage(
          { id: 'emails.mainPasswordChanged.thanks' },
          locale
        )}</mj-text>
        <mj-text mj-class="sub-text">${intl.formatMessage(
          { id: 'emails.mainPasswordChanged.supportAvailability' },
          locale
        )}</mj-text>`;
