import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCreateWalletVariables {
  bitgoXpub: string;
}

export const mainCreateWallet = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.Safe
}" alt="safe"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCreateWallet.btcWallet' },
  locale
)}</mj-text>
<mj-text mj-class="left bold">${intl.formatMessage(
  { id: 'emails.mainCreateWallet.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateWallet.congratulations' },
  locale
)}</mj-text>
<mj-text mj-class="h3 left">${intl.formatMessage(
  { id: 'emails.mainCreateWallet.referenceKey' },
  locale
)}</mj-text>

<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">
  <mj-column width="90%">
    <mj-text align="center" padding="8px 25px">
      {{bitgoXpub}}
    </mj-text>
  </mj-column>
</mj-section>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateWallet.pleaseKeepThisEmail' },
  locale
)}<a href="https://support.nuri.com/hc/en-gb/articles/360000462220">${intl.formatMessage(
  { id: 'emails.mainCreateWallet.here' },
  locale
)}</a>.</mj-text>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCreateWallet.thanks' },
  locale
)}</mj-text>`;
