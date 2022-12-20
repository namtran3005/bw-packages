import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface MainStandingOrderLastExecutionVariables {
  frequency: string;
  amountString: string;
  recipient: string;
  endExecutionDate: string;
  url: string;
}

export const mainStandingOrderLastExecution = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.StandingOrder
}" alt="standing-order"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.mainStandingOrderLastExecution.hasFinished' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainStandingOrderLastExecution.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainStandingOrderLastExecution.wasLastSent' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainStandingOrderLastExecution.wouldLikeToContinue' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button" href="{{url}}">${intl.formatMessage(
  { id: 'emails.mainStandingOrderLastExecution.cta' },
  locale
)}</mj-button>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.mainStandingOrderLastExecution.thanks' },
  locale
)}</mj-text>`;
