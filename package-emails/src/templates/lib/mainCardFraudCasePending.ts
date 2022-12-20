import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';
import { NuriImages } from '../images';

export interface MainCardFraudCasePendingVariables {
  firstName: string;
  amountString: string;
  merchantName: string;
  transactionTime: string;
  ctaUrl: string;
}

export const mainCardFraudCasePending = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.FraudCasePending
}" alt="delivery"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.title' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.hi' },
  locale
)}</mj-text>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.unusualActivity' },
  locale
)}</mj-text>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.transactionDetailsHeading' },
  locale
)}</mj-text>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.transactionDetails' },
  locale
)}</mj-text>
<br />
<mj-text mj-class="left"><b>${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.actionRequired' },
  locale
)}</b> ${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.actionRequiredInfo' },
  locale
)}</mj-text>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.madeByYou' },
  locale
)}</mj-text>
<br />
<mj-text mj-class="left">
  <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      { id: 'emails.mainCardFraudCasePending.madeByYouStep1' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainCardFraudCasePending.madeByYouStep2' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainCardFraudCasePending.madeByYouStep3' },
      locale
    )}</li>
  </ul>
</mj-text>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.notMadeByYou' },
  locale
)}</mj-text>
<mj-text mj-class="left">
  <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      { id: 'emails.mainCardFraudCasePending.notMadeByYouStep1' },
      locale
    )}</li>
    <li>${intl.formatMessage(
      { id: 'emails.mainCardFraudCasePending.notMadeByYouStep2' },
      locale
    )}
    </li>
  </ul>
</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.cardReorderTip' },
  locale
)}</mj-text>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.reorderCard' },
  locale
)}</mj-text>
<mj-text mj-class="left">
  <ul style="margin-bottom: 0;margin-top: 0;">
    <li>${intl.formatMessage(
      {
        id: 'emails.mainCardFraudCasePending.reorderCardStep1',
      },
      locale
    )}</li>
    <li>${intl.formatMessage(
      {
        id: 'emails.mainCardFraudCasePending.reorderCardStep2',
      },
      locale
    )}</li>
    <li>${intl.formatMessage(
      {
        id: 'emails.mainCardFraudCasePending.reorderCardStep3',
      },
      locale
    )}</li>
  </ul>
</mj-text>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.anyQuestions' },
  locale
)}</mj-text>
<br />
<mj-button mj-class="primary-button" href="{{ctaUrl}}">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.cta' },
  locale
)}</mj-button>
<br />
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCasePending.thanks' },
  locale
)}</mj-text>`;
