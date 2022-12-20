/* eslint-disable @typescript-eslint/no-var-requires  */
/* eslint-disable node/no-missing-require */
import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import IntlMessageFormat from 'intl-messageformat';
import { NumberFormat } from '@formatjs/intl-numberformat';

NumberFormat.__addLocaleData(
  // eslint-disable-next-line node/no-extraneous-require
  require('@formatjs/intl-numberformat/dist/locale-data/en.json')
);

NumberFormat.__addLocaleData(
  // eslint-disable-next-line node/no-extraneous-require
  require('@formatjs/intl-numberformat/dist/locale-data/de.json')
);

/*
Mirrors intl.formatMessage api for use in server side code
*/

export interface FormatNumberOptions {
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
}

export class Intl {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private messages: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(messages: any) {
    this.messages = messages;
  }

  public formatMessage(
    { id }: { id: string },
    locale: Locales,
    values?: { [key: string]: string }
  ) {
    let usedLocale = locale;
    try {
      let o = this.messages[usedLocale];
      const p = id.split('.');

      // Get JSON value from path
      let messageTemplate = p.reduce(
        (xs, x) => (xs && xs[x] ? xs[x] : null),
        o
      );

      if (!messageTemplate) {
        // Default to English
        usedLocale = Locales.en;
        o = this.messages[usedLocale];
        messageTemplate = p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);
      }

      if (!messageTemplate) {
        // Default to ID
        return id;
      } else if (values) {
        const msg = new IntlMessageFormat(messageTemplate, usedLocale);
        return msg.format(values || {});
      } else {
        return messageTemplate;
      }
    } catch (err) {
      return id;
    }
  }

  public formatNumber(
    value: number,
    options: FormatNumberOptions,
    locale: Locales
  ): string {
    const numberFormat = new NumberFormat(locale, options);
    return numberFormat.format(value);
  }
}
