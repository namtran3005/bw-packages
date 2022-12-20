import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { intl } from '../../../locales';

export const valediction = (locale: Locales) => `
<mj-text>
  ${intl.formatMessage({ id: 'emails.etf.valediction' }, locale)}
</mj-text>
`;
