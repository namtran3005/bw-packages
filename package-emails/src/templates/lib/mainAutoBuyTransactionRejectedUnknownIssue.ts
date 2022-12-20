import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainAutoBuyRejectedUnknownIssueVariables {
  firstName: string;
  amountString: string;
  cryptoCurrency: string;
  frequency: string;
}

export const mainAutoBuyRejectedUnknownIssue = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.UnknownIssue
}" alt="success"></mj-image>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyRejectedUnknownIssue.salutation' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyRejectedUnknownIssue.firstParagraph' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  {
    id: 'emails.mainAutoBuyRejectedUnknownIssue.secondParagraph',
  },
  locale
)}</mj-text>
<mj-section padding-left="20px">
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyRejectedUnknownIssue.firstListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyRejectedUnknownIssue.secondListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyRejectedUnknownIssue.thirdListItem',
    },
    locale
  )} </mj-text>
  <mj-text >${intl.formatMessage(
    {
      id: 'emails.mainAutoBuyRejectedUnknownIssue.fourthListItem',
    },
    locale
  )} </mj-text> 
</mj-section>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyInsufficientFunds.thirdParagraph' },
  locale
)}</mj-text>
<mj-text>${intl.formatMessage(
  { id: 'emails.mainAutoBuyInsufficientFunds.thanks' },
  locale
)}</mj-text>`;
