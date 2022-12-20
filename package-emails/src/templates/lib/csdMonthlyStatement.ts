import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';

export interface CsdMonthlyStatementVariables {
  month: string;
  year: string;
  firstName: string;
  bitwalaWebUrl: string;
  linkToStatements: string;
}

export const csdMonthlyStatement = (
  locale: Locales
) => `<mj-image mj-class="top-icon" src="${
  NuriImages.ClipBoard
}" alt="searching"></mj-image>
<mj-text mj-class="h2">${intl.formatMessage(
  { id: 'emails.csdMonthlyStatements.newStatementAvailable' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.csdMonthlyStatements.hi' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.csdMonthlyStatements.yourStatementOfAccountFor' },
  locale
)}</mj-text>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.csdMonthlyStatements.toDownload' },
  locale
)}</mj-text>
<mj-button mj-class="primary-button"><a ses:no-track href={{linkToStatements}} />${intl.formatMessage(
  { id: 'emails.csdMonthlyStatements.cta' },
  locale
)}</a></mj-button>
<mj-text mj-class="left">${intl.formatMessage(
  { id: 'emails.csdMonthlyStatements.thanks' },
  locale
)}</mj-text>`;
