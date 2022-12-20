import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';
import { valediction } from '../shared/etf/valediction';
import { poweredBy } from '../shared/etf/poweredBy';

export interface MainEtfRefundVariables {
  firstName: string;
  txId: string;
  refundedAmount: number;
}

export const mainEtfRefund = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.EtfRefund
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage({ id: 'emails.mainEtfRefund.title' }, locale)}
</mj-text>

<mj-text mj-class="left bold">
${intl.formatMessage({ id: 'emails.mainEtfRefund.hi' }, locale)}
</mj-text>

<mj-text>
${intl.formatMessage({ id: 'emails.mainEtfRefund.refunded' }, locale)}
</mj-text>

<mj-text mj-class="left h3">
  ${intl.formatMessage(
    { id: 'emails.mainEtfRefund.transactionDetails' },
    locale
  )}
</mj-text>

<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">
  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage({ id: 'emails.mainEtfRefund.txId' }, locale)}
    </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ txId }}</mj-text>
  </mj-column>

  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfRefund.refundedAmount' },
        locale
      )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ refundedAmount }}</mj-text>
  </mj-column>
</mj-section>

<mj-text>
  ${intl.formatMessage({ id: 'emails.mainEtfRefund.apologies' }, locale)}
</mj-text>

${valediction(locale)}
${poweredBy(locale)}
`;
