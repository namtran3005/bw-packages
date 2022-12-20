import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCardOrderVariables {
  firstName: string;
  lastName: string;
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
  country: string;
}

export const mainCardOrder = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.CardOrdered
}" alt="delivery"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCardOrder.onItsWay' },
  locale
)}</mj-text mj-class="left">
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardOrder.congratulations' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardOrder.cardShouldArrive' },
  locale
)}</mj-text>
<mj-text mj-class="left">
    {{firstName}} {{lastName}} <br/>
    {{line1}} {{line2}} <br/>
    {{postalCode}}, {{city}} <br/>
    {{country}}
</mj-text>
<mj-text my-class="left">${intl.formatMessage(
  { id: 'emails.mainCardOrder.thanks' },
  locale
)}</mj-text>
<mj-text my-class="sub-text left">${intl.formatMessage(
  { id: 'emails.mainCardOrder.ifAddressIncorrect' },
  locale
)}</mj-text>
`;
