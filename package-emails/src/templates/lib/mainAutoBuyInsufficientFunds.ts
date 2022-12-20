import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAutoBuyInsufficientFundsVariables {
  firstName: string;
  amountString: string;
  cryptoCurrency: string;
  frequency: string;
}

export const mainAutoBuyInsufficientFunds = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.InsufficientFunds
}" alt="success"></mj-image>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyInsufficientFunds.salutation' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyInsufficientFunds.firstParagraph' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  {
    id: 'emails.mainAutoBuyInsufficientFunds.secondParagraph',
  },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyInsufficientFunds.thirdParagraph' },
  locale
)}</mj-text>
<mj-section padding-left="20px">
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyInsufficientFunds.firstListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyInsufficientFunds.secondListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyInsufficientFunds.thirdListItem',
    },
    locale
  )} </mj-text> 
   <mj-text >${intl.formatMessage(
     {
       id: 'emails.mainAutoBuyInsufficientFunds.fourthListItem',
     },
     locale
   )} </mj-text> 
    <mj-text >${intl.formatMessage(
      {
        id: 'emails.mainAutoBuyInsufficientFunds.fithListItem',
      },
      locale
    )} </mj-text> 
</mj-section>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyInsufficientFunds.thanks' },
  locale
)}</mj-text>`;
