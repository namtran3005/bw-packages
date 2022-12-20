import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainResetPasswordVariables {
  url: string;
}

export const mainResetPassword = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Keys
}" alt="keys"></mj-image>
        <mj-text mj-class="h2">${intl.formatMessage(
          { id: 'emails.mainResetPassword.forgotYourPassword' },
          locale
        )}</mj-text>
        <mj-text>${intl.formatMessage(
          { id: 'emails.mainResetPassword.hi' },
          locale
        )}</mj-text>
        <mj-text>${intl.formatMessage(
          { id: 'emails.mainResetPassword.receivedYourRequest' },
          locale
        )}</mj-text>
        <mj-button mj-class="primary-button" href="{{url}}">${intl.formatMessage(
          { id: 'emails.mainResetPassword.cta' },
          locale
        )}</mj-button>
        <mj-text>${intl.formatMessage(
          { id: 'emails.mainResetPassword.thanks' },
          locale
        )}</mj-text>
        <mj-text mj-class="sub-text">${intl.formatMessage(
          { id: 'emails.mainResetPassword.didntMake' },
          locale
        )}</mj-text>`;
