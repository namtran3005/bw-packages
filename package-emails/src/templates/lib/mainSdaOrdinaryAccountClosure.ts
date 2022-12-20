import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';

export interface MainSdaOrdinaryAccountClosureVariables {
  firstName: string;
  bankingArrangementsClosedBy: string;
  sdaTerminationFrom: string;
  restrictAccessFrom: string;
}

export const mainSdaOrdinaryAccountClosure = (locale: Locales) => `
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaOrdinaryAccountClosure.salutation' },
  locale
)}
</mj-text>
<mj-text>
${intl.formatMessage({ id: 'emails.mainSdaOrdinaryAccountClosure.p1' }, locale)}
</mj-text>
<mj-text>
${intl.formatMessage({ id: 'emails.mainSdaOrdinaryAccountClosure.p2' }, locale)}
</mj-text>
<mj-text>
${intl.formatMessage({ id: 'emails.mainSdaOrdinaryAccountClosure.p3' }, locale)}
</mj-text>
<mj-text>
${intl.formatMessage({ id: 'emails.mainSdaOrdinaryAccountClosure.p4' }, locale)}
</mj-text>
<mj-section>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sb.p1' },
          locale
        )}
        </mj-text>
    </mj-column>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sda.p1' },
          locale
        )}
        </mj-text>
    </mj-column>
</mj-section>
<mj-section>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sb.p2' },
          locale
        )}
        </mj-text>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sb.p3' },
          locale
        )}
        </mj-text>
    </mj-column>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sda.p2' },
          locale
        )}
        </mj-text>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sda.p3' },
          locale
        )}
        </mj-text>
    </mj-column>
</mj-section>
<mj-section>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sb.p4' },
          locale
        )}
        </mj-text>
    </mj-column>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaOrdinaryAccountClosure.sda.p4' },
          locale
        )}
        </mj-text>
    </mj-column>
</mj-section>
<mj-text>
${intl.formatMessage({ id: 'emails.mainSdaOrdinaryAccountClosure.p5' }, locale)}
</mj-text>
<mj-text>
${intl.formatMessage({ id: 'emails.mainSdaOrdinaryAccountClosure.p6' }, locale)}
</mj-text>
`;
