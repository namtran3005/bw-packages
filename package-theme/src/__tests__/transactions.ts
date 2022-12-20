import {
  getAmountForeground,
  getTradeAmountBackground,
  getTradeAmountForeground,
  getSecondaryAmountBackground,
} from '../transactions';

describe('Transactions get theme methods', () => {
  describe('getAmountForeground', () => {
    describe('for amount gt zero should', () => {
      const fgColorGtZero = getAmountForeground(10);
      const fgColorStrGtZero = getAmountForeground('10.000000000000000001');

      it('accept both strings and number', () => {
        expect(fgColorGtZero).toBe(fgColorStrGtZero);
      });

      it('be equal to primarySuccess', () => {
        expect(fgColorGtZero).toBe('primarySuccess');
        expect(fgColorStrGtZero).toBe('primarySuccess');
      });
    });

    describe('for amount lt zero should', () => {
      const fgColorLtZero = getAmountForeground('-10');
      const fgColorStrLtZero = getAmountForeground('-10.000000000000000001');

      it('accept both strings and number', () => {
        expect(fgColorLtZero).toBe(fgColorStrLtZero);
      });

      it('be equal to text', () => {
        expect(fgColorLtZero).toBe('text');
        expect(fgColorStrLtZero).toBe('text');
      });
    });
  });

  describe('getTradeAmountBackground', () => {
    describe('for amount gt zero should', () => {
      const bgColorGtZero = getTradeAmountBackground(12345);
      const bgColorStrGtZero = getTradeAmountBackground(
        '12.0000000000000000000345'
      );

      it('accept both strings and number', () => {
        expect(bgColorGtZero).toBe(bgColorStrGtZero);
      });

      it('be equal to primarySuccess', () => {
        expect(bgColorGtZero).toBe('primarySuccess');
        expect(bgColorStrGtZero).toBe('primarySuccess');
      });
    });

    describe('for amount lt zero should', () => {
      const bgColorLtZero = getTradeAmountBackground(-12345);
      const bgColorStrLtZero = getTradeAmountBackground(
        '-12.0000000000000000000345'
      );

      it('accept both strings and number', () => {
        expect(bgColorLtZero).toBe(bgColorStrLtZero);
      });

      it('be equal to primaryGrey', () => {
        expect(bgColorLtZero).toBe('primaryGrey');
        expect(bgColorStrLtZero).toBe('primaryGrey');
      });
    });
  });

  describe('getTradeAmountForeground', () => {
    describe('for amount gt zero should', () => {
      const fgColorGtZero = getTradeAmountForeground(99);
      const fgColorStrGtZero = getTradeAmountForeground(
        '99.9999999999999999999999'
      );

      it('accept both strings and number', () => {
        expect(fgColorGtZero).toBe(fgColorStrGtZero);
      });

      it('be equal to whitestWhite', () => {
        expect(fgColorGtZero).toBe('whitestWhite');
        expect(fgColorStrGtZero).toBe('whitestWhite');
      });
    });

    describe('for amount lt zero should', () => {
      const fgColorLtZero = getTradeAmountForeground(-99);
      const fgColorStrLtZero = getTradeAmountForeground(
        '-99.9999999999999999999999'
      );

      it('accept both strings and number', () => {
        expect(fgColorLtZero).toBe(fgColorStrLtZero);
      });

      it('be equal to primaryBlue', () => {
        expect(fgColorLtZero).toBe('primaryBlue');
        expect(fgColorStrLtZero).toBe('primaryBlue');
      });
    });
  });

  describe('getSecondaryAmountBackground', () => {
    describe('for amount gt zero should', () => {
      const bgColorGtZero = getSecondaryAmountBackground(0.0000001);
      const bgColorStrGtZero = getSecondaryAmountBackground(
        '0.000000100000009'
      );

      it('accept both strings and number', () => {
        expect(bgColorGtZero).toBe(bgColorStrGtZero);
      });

      it('be equal to primarySuccess', () => {
        expect(bgColorGtZero).toBe('primarySuccess');
        expect(bgColorStrGtZero).toBe('primarySuccess');
      });
    });

    describe('for amount lt zero should', () => {
      const bgColorLtZero = getSecondaryAmountBackground(-0.0000001);
      const bgColorStrLtZero = getSecondaryAmountBackground(
        '-0.000000100000009'
      );

      it('accept both strings and number', () => {
        expect(bgColorLtZero).toBe(bgColorStrLtZero);
      });

      it('be equal to primaryGrey', () => {
        expect(bgColorLtZero).toBe('primaryGrey');
        expect(bgColorStrLtZero).toBe('primaryGrey');
      });
    });
  });
});
