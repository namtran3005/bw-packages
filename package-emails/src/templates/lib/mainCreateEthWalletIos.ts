import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCreateEthWalletIosVariables {
  firstName: string;
}

export const mainCreateEthWalletIos = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.SafeEth
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.congrats' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.walletSecured' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.walletIsBoundTo' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.unpairIphone' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.forMoreInfo' },
  locale
)}
<a href=${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.supportLink' },
  locale
)}>${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.supportCentre' },
  locale
)} </a>.
</mj-text>

<mj-text mj-class="left"t>${intl.formatMessage(
  { id: 'emails.mainCreateEthWalletIos.thanks' },
  locale
)}</mj-text>
`;
