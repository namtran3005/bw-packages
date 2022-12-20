import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainCryptoLendingWithdrawalPendingVariables {
  firstName: string;
  txDbId: string;
  createdAt: string;
  amount: string;
  deepLinkUrl: string;
}

export const mainCryptoLendingWithdrawalPending = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.Withdraw
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.title' },
    locale
  )}
</mj-text>

<mj-text mj-class="left bold">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.hi' },
    locale
  )}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.yourInterest' },
    locale
  )}
</mj-text mj-class="left">

<mj-text mj-class="left h3">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.invoiceDetails' },
    locale
  )}
</mj-text>


<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainCryptoLendingWithdrawalPending.txId' },
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
      { id: 'emails.mainCryptoLendingWithdrawalPending.created' },
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
      { id: 'emails.mainCryptoLendingWithdrawalPending.amount' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{amount}}</mj-text>
  </mj-column>

  <mj-column width="40%">
  <mj-text mj-class="left bold" padding="8px 25px">
    ${intl.formatMessage(
      { id: 'emails.mainCryptoLendingWithdrawalPending.networkFee' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">0 BTC</mj-text>
  </mj-column>

</mj-section>


<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.youCanViewStatus' },
    locale
  )}
  <br />
  <br />
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.willLetYouKnow' },
    locale
  )}
</mj-text>

<mj-button mj-class="primary-button" href="{{deepLinkUrl}}">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.cta' },
    locale
  )}
</mj-button>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainCryptoLendingWithdrawalPending.thanks' },
    locale
  )}
</mj-text>
`;
