import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCreateEthWalletAndroidVariables {
  firstName: string;
}

export const mainCreateEthWalletAndroid = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SafeEth
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.congrats' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.walletSecured' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.walletIsBoundTo' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.androidDoesnt' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.forMoreInfo' },
  locale
)}
<a href=${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.supportLink' },
  locale
)}>${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.supportCentre' },
  locale
)} </a>.
</mj-text>

<mj-text mj-class="left"t>${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletAndroid.thanks' },
  locale
)}</mj-text>
`;
