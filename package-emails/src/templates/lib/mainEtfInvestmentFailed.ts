import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { NuriImages } from '../images';
import { intl } from '../../locales';
import { poweredBy } from '../shared/etf/poweredBy';
import { valediction } from '../shared/etf/valediction';

export interface MainEtfInvestmentFailedVariables {
  firstName: string;
  amount: number;
}

export const mainEtfInvestmentFailed = (locale: Locales) => `
<mj-image mj-class="top-icon" src="${
  NuriImages.EtfInvestmentFailed
}" alt="email"></mj-image>

<mj-text mj-class="h2">
  ${intl.formatMessage({ id: 'emails.mainEtfInvestmentFailed.title' }, locale)}
</mj-text>

<mj-text mj-class="left bold">
${intl.formatMessage({ id: 'emails.mainEtfInvestmentFailed.hi' }, locale)}
</mj-text>

<mj-text mj-class="left">
${intl.formatMessage(
  { id: 'emails.mainEtfInvestmentFailed.cantProcess' },
  locale
)}
</mj-text>

<mj-text mj-class="left">
${intl.formatMessage({ id: 'emails.mainEtfInvestmentFailed.refund' }, locale)}
</mj-text>

<mj-text mj-class="left">
${intl.formatMessage({ id: 'emails.mainEtfInvestmentFailed.apology' }, locale)}
</mj-text>

${valediction(locale)}

${poweredBy(locale)}
`;
