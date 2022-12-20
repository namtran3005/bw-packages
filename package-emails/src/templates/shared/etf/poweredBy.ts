import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../../locales';

export const poweredBy = (locale: Locales) => `
<mj-text mj-class="sub-text">
  ${intl.formatMessage({ id: 'emails.etf.poweredBy' }, locale)}
</mj-text>
`;
