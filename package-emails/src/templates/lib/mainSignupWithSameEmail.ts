import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainSignupWithSameEmailVariables {
  firstName: string;
  url: string;
}

export const mainSignupWithSameEmail = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SignUp
}" alt="email"></mj-image>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainSignupWithSameEmail.hi' },
  locale
)},</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainSignupWithSameEmail.signUpWithSameEmail' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button"><a ses:no-track href="{{url}}">${intl.formatMessage(
  { id: 'emails.mainSignupWithSameEmail.login' },
  locale
)}</a></mj-button>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSignupWithSameEmail.thanks' },
  locale
)}</mj-text>`;
