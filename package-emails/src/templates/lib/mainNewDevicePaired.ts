import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';
import { NuriImages } from '../images';

export interface MainNewDevicePairedVariables {
  firstName: string;
  timeOfChange: string;
  ipAddress: string;
  ipLocation: string;
}

export const mainNewDevicePaired = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.DevicePaired
}" alt="email"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainNewDevicePaired.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainNewDevicePaired.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainNewDevicePaired.pairingSuccessful' },
  locale
)}</mj-text>

<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">
  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px"">${intl.formatMessage(
      { id: 'emails.mainNewDevicePaired.timeOfChange' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{timeOfChange}}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainNewDevicePaired.ipAddress' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ipAddress}}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainNewDevicePaired.ipLocation' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ipLocation}}</mj-text>
  </mj-column>
</mj-section>

<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainNewDevicePaired.contactCS' },
  locale
)}
  <a href="mailto:support@nuri.com">support@nuri.com</a>. *
</mj-text>
<mj-text mj-class="left"t>${intl.formatMessage(
  { id: 'emails.mainNewDevicePaired.thanks' },
  locale
)}</mj-text>
<mj-text mj-class="left"t>${intl.formatMessage(
  { id: 'emails.mainNewDevicePaired.availableHours' },
  locale
)}</mj-text>
`;
