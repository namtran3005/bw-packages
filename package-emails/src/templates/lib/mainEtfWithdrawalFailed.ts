import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';
import { NuriImages } from '../images';
import { valediction } from '../shared/etf/valediction';
import { poweredBy } from '../shared/etf/poweredBy';

export interface MainEtfWithdrawalFailedVariables {
  firstName: string;
  txId: string;
  createdAt: string;
  ctaUrl: string;
}

export const mainEtfWithdrawalFailed = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.EtfWithdrawalFailed
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage({ id: 'emails.mainEtfWithdrawalFailed.title' }, locale)}
</mj-text>

<mj-text mj-class="left bold">
${intl.formatMessage({ id: 'emails.mainEtfWithdrawalFailed.hi' }, locale)}
</mj-text>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainEtfWithdrawalFailed.cantProcess' },
    locale
  )}
  <a mj-class="link-text" ses:no-track href="${intl.formatMessage(
    { id: 'index.supportCenterUrl' },
    locale
  )}"/>
    ${intl.formatMessage(
      { id: 'emails.mainEtfWithdrawalFailed.contactSupport' },
      locale
    )}
  </a>
</mj-text>

<mj-section background-color="#D4D2D2" border-radius="9px" padding-top="8px" padding-bottom="8px">
  <mj-column width="40%">
    <mj-text mj-class="left bold" padding="8px 25px">
      ${intl.formatMessage(
        { id: 'emails.mainEtfWithdrawalFailed.txId' },
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
      { id: 'emails.mainEtfWithdrawalFailed.createdAt' },
      locale
    )}
  </mj-text>
  </mj-column>
  <mj-column width="60%">
    <mj-text mj-class="left" padding="8px 25px">{{ createdAt }}</mj-text>
  </mj-column>
</mj-section>

<mj-text mj-class="left">
  ${intl.formatMessage(
    { id: 'emails.mainEtfWithdrawalFailed.apology' },
    locale
  )}
</mj-text>

<mj-button mj-class="primary-button" href="{{ctaUrl}}">
  ${intl.formatMessage({ id: 'emails.mainEtfWithdrawalFailed.cta' }, locale)}
</mj-button>

${valediction(locale)}
${poweredBy(locale)}
`;
