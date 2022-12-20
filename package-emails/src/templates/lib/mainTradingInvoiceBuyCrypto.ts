import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { Currencies, getCurrencyName } from '@bitwala-cryptobank-squad/package-utils';
import { intl } from '../../locales';
import { NuriImages } from '../images';

export interface MainTradingInvoiceBuyCryptoVariables {
  firstName: string;
  transactionId: string;
  amountStringInput: string;
  amountStringOutput: string;
  amountStringTradingFeeCrypto: string;
  amountStringTradingFeeEur: string;
  amountStringNetworkFeeCrypto: string;
  amountStringNetworkFeeEur: string;
  transactionUrl: string;
  askQuote: string;
  dateTransaction: string;
  walletType: string;
}

const imageSrcToCurrency = {
  [Currencies.ETH as string]: NuriImages.SendEth,
  [Currencies.BTC as string]: NuriImages.SendBtc,
};

const mainTradingInvoiceBuyCrypto = (crypto: Currencies) => (
  locale: Locales
) => {
  const cryptoName = getCurrencyName(crypto);

  return `
<mj-image mj-class="top-icon" src="${
    imageSrcToCurrency[crypto]
  }" alt="send-${crypto.toLowerCase()}"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
    { id: 'emails.mainTradingInvoiceBuyCrypto.title' },
    locale,
    {
      cryptoName,
    }
  )}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainTradingInvoiceBuyCrypto.hi' },
    locale
  )}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainTradingInvoiceBuyCrypto.textPart' },
    locale,
    {
      cryptoName,
      crypto,
    }
  )}</mj-text>
<mj-text mj-class="h3 left">${intl.formatMessage(
    { id: 'emails.mainTradingInvoiceBuyCrypto.detailsTitle' },
    locale
  )}</mj-text>

<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">
  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.transactionId' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{transactionId}}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.created' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{dateTransaction}}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.amountReceived' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{amountStringOutput}} ${crypto}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.amountSpent' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{amountStringInput}} EUR</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.askQuote' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.askQuoteContent' },
      locale,
      {
        crypto,
      }
    )}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.tradingFee' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.tradingFeeContent' },
      locale,
      {
        crypto,
      }
    )}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.networkFee' },
      locale
    )}</mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">${intl.formatMessage(
      { id: 'emails.mainTradingInvoiceBuyCrypto.networkFeeContent' },
      locale,
      {
        crypto,
      }
    )}</mj-text>
  </mj-column>
</mj-section>

<mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainTradingInvoiceBuyCrypto.textInfo' },
    locale
  )}</mj-text>
<mj-button mj-class="primary-button" href="{{transactionUrl}}">${intl.formatMessage(
    { id: 'emails.mainTradingInvoiceBuyCrypto.cta' },
    locale
  )}</mj-button>
<mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainTradingInvoiceBuyCrypto.thanks' },
    locale
  )}</mj-text>`;
};

export const mainTradingInvoiceBuyBtc = mainTradingInvoiceBuyCrypto(
  Currencies.BTC
);
export const mainTradingInvoiceBuyEth = mainTradingInvoiceBuyCrypto(
  Currencies.ETH
);
