import { Locales } from '@bitwala-cryptobank-squad/package-constants';
import { Intl } from '../';

const messages = {
  en: {
    foo: 'bar',
    foo2: 'bar2',
    parent: {
      child: 'son',
    },
  },
  de: {
    foo: 'das bar',
  },
};

const intl = new Intl(messages);

describe('Intl module', () => {
  describe('formatMessage', () => {
    it('should render the correct string in the correct locale', () => {
      expect(intl.formatMessage({ id: 'foo' }, Locales.en)).toEqual('bar');
      expect(intl.formatMessage({ id: 'parent.child' }, Locales.en)).toEqual(
        'son'
      );

      expect(intl.formatMessage({ id: 'foo' }, Locales.de)).toEqual('das bar');
    });

    it('should default to English', () => {
      expect(intl.formatMessage({ id: 'foo2' }, Locales.de)).toEqual('bar2');
    });

    it('should default to the id when no English is available', () => {
      expect(
        intl.formatMessage({ id: 'unknown.id.string' }, Locales.en)
      ).toEqual('unknown.id.string');
      expect(
        intl.formatMessage({ id: 'unknown.id.string' }, Locales.de)
      ).toEqual('unknown.id.string');
    });
  });
});
