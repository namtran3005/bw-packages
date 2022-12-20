import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../locales';
import { NuriImages } from '../images';

export interface MainCardFraudCaseTimeoutVariables {
  firstName: string;
  amountString: string;
  merchantName: string;
  transactionTime: string;
  ctaUrl: string;
}

export const mainCardFraudCaseTimeout = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.LockedCard
}" alt="delivery"></mj-image>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainCardFraudCaseTimeout.hi' },
  locale
)}</mj-text>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.cardBlocked' },
    locale
  )}</mj-text>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.transactionDetailsHeading' },
    locale
  )}</mj-text>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.transactionDetails' },
    locale
  )}</mj-text>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.madeByYou' },
    locale
  )}</mj-text>
  <mj-text mj-class="left">
    <ul style="margin-bottom: 0;margin-top: 0;">
      <li>${intl.formatMessage(
        { id: 'emails.mainCardFraudCaseTimeout.madeByYouStep1' },
        locale
      )}</li>
      <li>${intl.formatMessage(
        { id: 'emails.mainCardFraudCaseTimeout.madeByYouStep2' },
        locale
      )}</li>
      <li>${intl.formatMessage(
        { id: 'emails.mainCardFraudCaseTimeout.madeByYouStep3' },
        locale
      )}</li>
    </ul>
  </mj-text>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.cardReorderTip' },
    locale
  )}</mj-text>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.reorderCard' },
    locale
  )}</mj-text>
  <mj-text mj-class="left">
    <ul style="margin-bottom: 0;margin-top: 0;">
      <li>${intl.formatMessage(
        {
          id: 'emails.mainCardFraudCaseTimeout.reorderCardStep1',
        },
        locale
      )}</li>
      <li>${intl.formatMessage(
        {
          id: 'emails.mainCardFraudCaseTimeout.reorderCardStep2',
        },
        locale
      )}</li>
      <li>${intl.formatMessage(
        {
          id: 'emails.mainCardFraudCaseTimeout.reorderCardStep3',
        },
        locale
      )}</li>
    </ul>
  </mj-text>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.anyQuestions' },
    locale
  )}</mj-text>
  <br />
  <mj-button mj-class="primary-button" href="{{ctaUrl}}">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.cta' },
    locale
  )}</mj-button>
  <br />
  <mj-text mj-class="left">${intl.formatMessage(
    { id: 'emails.mainCardFraudCaseTimeout.thanks' },
    locale
  )}</mj-text>`;
