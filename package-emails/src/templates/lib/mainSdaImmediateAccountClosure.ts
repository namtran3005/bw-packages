import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';

export interface MainSdaImmediateAccountClosureVariables {
  firstName: string;
}

export const mainSdaImmediateAccountClosure = (locale: Locales) => `
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaImmediateAccountClosure.salutation' },
  locale
)}
</mj-text>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaImmediateAccountClosure.p1' },
  locale
)}
</mj-text>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaImmediateAccountClosure.p2' },
  locale
)}
</mj-text>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaImmediateAccountClosure.p3' },
  locale
)}
</mj-text>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaImmediateAccountClosure.p4' },
  locale
)}
</mj-text>
<mj-section>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sb.p1' },
          locale
        )}
        </mj-text>
    </mj-column>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sda.p1' },
          locale
        )}
        </mj-text>
    </mj-column>
</mj-section>
<mj-section>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sb.p2' },
          locale
        )}
        </mj-text>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sb.p3' },
          locale
        )}
        </mj-text>
    </mj-column>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sda.p2' },
          locale
        )}
        </mj-text>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sda.p3' },
          locale
        )}
        </mj-text>
    </mj-column>
</mj-section>
<mj-section>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sb.p4' },
          locale
        )}
        </mj-text>
    </mj-column>
    <mj-column>
        <mj-text>
        ${intl.formatMessage(
          { id: 'emails.mainSdaImmediateAccountClosure.sda.p4' },
          locale
        )}
        </mj-text>
    </mj-column>
</mj-section>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaImmediateAccountClosure.p5' },
  locale
)}
</mj-text>
<mj-text>
${intl.formatMessage(
  { id: 'emails.mainSdaImmediateAccountClosure.p6' },
  locale
)}
</mj-text>
`;
