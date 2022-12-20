import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';
import { NuriImages } from '../images';

// The content of the template would be added in a follow up PR
export interface MainAutoBuyTradingLimitExceededVariables {
  firstName: string;
  frequency: string;
  amountString: string;
  cryptoCurrency: string;
}
export const mainAutoBuyTradingLimitExceeded = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.TradingLimitReached
}" alt="success"></mj-image>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyTradingLimitExceeded.salutation' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyTradingLimitExceeded.firstParagraph' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  {
    id: 'emails.mainAutoBuyTradingLimitExceeded.secondParagraph',
  },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyTradingLimitExceeded.thirdParagraph' },
  locale
)}</mj-text>
<mj-section padding-left="20px">
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyTradingLimitExceeded.firstListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyTradingLimitExceeded.secondListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyTradingLimitExceeded.thirdListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyTradingLimitExceeded.fourthListItem',
    },
    locale
  )} </mj-text> 
</mj-section>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyTradingLimitExceeded.thanks' },
  locale
)}</mj-text>`;
