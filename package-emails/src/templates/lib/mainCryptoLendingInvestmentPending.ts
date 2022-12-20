import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCryptoLendingInvestmentPendingVariables {
  firstName: string;
  txDbId: string;
  createdAt: string;
  amount: string;
  eurAmount: string;
  networkFee: string;
  eurNetworkFee: string;
  deepLinkUrl: string;
}

export const mainCryptoLendingInvestmentPending = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.PiggyBtc
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentPending.title' },
    locale
  )}
</mj-text>

<mj-text mj-class="left bold">
${intl.formatMessage(
  { id: 'emails.mainCryptoLendingInvestmentPending.hi' },
  locale
)}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentPending.yourInterest' },
    locale
  )}
</mj-text mj-class="left">

<mj-text mj-class="left h3">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentPending.invoiceDetails' },
    locale
  )}
</mj-text>


<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainCryptoLendingInvestmentPending.txId' },
        locale
      )}
    </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{txDbId}}</mj-text>
  </mj-column>

  <mj-column width="40%">
  <mj-text mj-class="left bold" padding="8px 25px">
    ${intl.formatMessage(
      { id: 'emails.mainCryptoLendingInvestmentPending.created' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{createdAt}}</mj-text>
  </mj-column>

  <mj-column width="40%">
  <mj-text mj-class="left bold" padding="8px 25px">
    ${intl.formatMessage(
      { id: 'emails.mainCryptoLendingInvestmentPending.amount' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{amount}} BTC / {{eurAmount}} EUR</mj-text>
  </mj-column>

  <mj-column width="40%">
  <mj-text mj-class="left bold" padding="8px 25px">
    ${intl.formatMessage(
      { id: 'emails.mainCryptoLendingInvestmentPending.networkFee' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{networkFee}} BTC / {{eurNetworkFee}} EUR</mj-text>
  </mj-column>

</mj-section>


<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentPending.youCanViewStatus' },
    locale
  )}
  <br />
  <br />
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentPending.willLetYouKnow' },
    locale
  )}
</mj-text>

<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentPending.cta' },
    locale
  )}
</mj-button>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingInvestmentPending.thanks' },
    locale
  )}
</mj-text>
`;
