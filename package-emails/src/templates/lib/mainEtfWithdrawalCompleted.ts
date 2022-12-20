import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';
import { valediction } from '../shared/etf/valediction';
import { poweredBy } from '../shared/etf/poweredBy';

export interface MainEtfWithdrawalCompletedVariables {
  firstName: string;
  amount: number;
  requestedAmount: number;
  txId: string;
  potName: string;
  tokenAmount: number;
  pricePerToken: number;
  netOutputAmount: number;
  tax: number;
  ctaUrl: string;
}

export const mainEtfWithdrawalCompleted = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.EtfWithdrawalCompleted
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage(
    { id: 'emails.mainEtfWithdrawalCompleted.title' },
    locale
  )}
</mj-text>

<mj-text mj-class="left bold">
${intl.formatMessage({ id: 'emails.mainEtfWithdrawalCompleted.hi' }, locale)}
</mj-text>

<mj-text>
${intl.formatMessage(
  { id: 'emails.mainEtfWithdrawalCompleted.completed' },
  locale
)}
</mj-text>

<mj-text mj-class="left h3">
  ${intl.formatMessage(
    { id: 'emails.mainEtfWithdrawalCompleted.transactionDetails' },
    locale
  )}
</mj-text>

<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">
  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfWithdrawalCompleted.requestedAmount' },
        locale
      )}
    </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ requestedAmount }}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfWithdrawalCompleted.potName' },
        locale
      )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ tokenAmount }}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfWithdrawalCompleted.pricePerToken' },
        locale
      )}
    </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ pricePerToken }} EUR</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfWithdrawalCompleted.tax' },
        locale
      )}
    </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ tax }} EUR</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfWithdrawalCompleted.txId' },
        locale
      )}
    </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ txId }}</mj-text>
  </mj-column>

  <mj-column width="40%">
  <mj-text mj-class="left bold" padding="8px 25px">
    ${intl.formatMessage(
      { id: 'emails.mainEtfWithdrawalCompleted.netAmount' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ netOutputAmount }} EUR</mj-text>
  </mj-column>
</mj-section>

<mj-text>
  ${intl.formatMessage(
    { id: 'emails.mainEtfWithdrawalCompleted.overview' },
    locale
  )}
</mj-text>

<mj-button mj-class="primary-button" href="{{ctaUrl}}">
  ${intl.formatMessage({ id: 'emails.mainEtfWithdrawalCompleted.cta' }, locale)}
</mj-button>

${valediction(locale)}
${poweredBy(locale)}
`;
