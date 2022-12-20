import { Intl } from '@bitwala-cryptobank-squad/package-utils';
import * as en from '../../translations/en/index.json';
import * as de from '../../translations/de/index.json';

const messages = {
  en,
  de,
};

export const intl = new Intl(messages);
