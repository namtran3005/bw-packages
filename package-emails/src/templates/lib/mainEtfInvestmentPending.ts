import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';
import { valediction } from '../shared/etf/valediction';
import { poweredBy } from '../shared/etf/poweredBy';

export interface MainEtfInvestmentPendingVariables {
  firstName: string;
  amount: number;
  txId: string;
  potName: string;
  tokenAmount: number;
  pricePerToken: number;
  ctaUrl: string;
}

export const mainEtfInvestmentPending = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.EtfInvestmentPending
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage({ id: 'emails.mainEtfInvestmentPending.title' }, locale)}
</mj-text>

<mj-text mj-class="left bold">
${intl.formatMessage({ id: 'emails.mainEtfInvestmentPending.hi' }, locale)}
</mj-text>

<mj-text>
${intl.formatMessage(
  { id: 'emails.mainEtfInvestmentPending.beingProcessed' },
  locale
)}
</mj-text>

<mj-text mj-class="left h3">
  ${intl.formatMessage(
    { id: 'emails.mainEtfInvestmentPending.transactionDetails' },
    locale
  )}
</mj-text>

<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfInvestmentPending.txId' },
        locale
      )}
    </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{txId}}</mj-text>
  </mj-column>

  <mj-column width="40%">
  <mj-text mj-class="left bold" padding="8px 25px">
    ${intl.formatMessage(
      { id: 'emails.mainEtfInvestmentPending.potName' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{potName}}</mj-text>
  </mj-column>

  <mj-column width="40%">
  <mj-text mj-class="left bold" padding="8px 25px">
    ${intl.formatMessage(
      { id: 'emails.mainEtfInvestmentPending.pricePerToken' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ pricePerToken }} EUR</mj-text>
  </mj-column>
</mj-section>

<mj-text>
${intl.formatMessage(
  { id: 'emails.mainEtfInvestmentPending.checkStatus' },
  locale
)}
</mj-text>

<mj-text>
${intl.formatMessage(
  { id: 'emails.mainEtfInvestmentPending.informCompletion' },
  locale
)}
</mj-text>

<mj-button mj-class="primary-button" href="{{ctaUrl}}">${intl.formatMessage(
  { id: 'emails.mainEtfInvestmentPending.cta' },
  locale
)}</mj-button>

${valediction(locale)}
${poweredBy(locale)}
`;
