import { Big } from 'big.js';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import * as calcFns from '../priceCalculation';

describe('Price calculations incl. fees', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return output from input BUY', async () => {
    const dummyReq = {
      side: calcFns.Side.BUY,
      input: { currency: Currencies.EUR, amount: 8000 },
      output: { currency: Currencies.BTC },
    };

    const conversionRate = Big(1).div(8500);

    const outputAmount = calcFns.outputFromInput(dummyReq, conversionRate, {
      serviceFee: Big(0.01),
      networkFee: Big(1),
    });
    expect(outputAmount.toFixed(8)).toEqual('0.93105882');
  });

  it('should return input from output BUY', async () => {
    const dummyReq = {
      side: calcFns.Side.BUY,
      input: { currency: Currencies.EUR },
      output: { currency: Currencies.BTC, amount: 0.003 },
    };

    const conversionRate = Big(8500);

    const inputAmount = calcFns.inputFromOutput(dummyReq, conversionRate, {
      serviceFee: Big(0.255),
      networkFee: Big(1),
    });

    expect(inputAmount.toFixed(2)).toEqual('26.76');
  });

  it('should return output from input SELL', async () => {
    const dummyReq = {
      side: calcFns.Side.BUY,
      input: { currency: Currencies.EUR, amount: 8000 },
      output: { currency: Currencies.BTC },
    };

    const conversionRate = Big(1).div(8500);

    const outputAmount = calcFns.outputFromInput(dummyReq, conversionRate, {
      serviceFee: Big(0.01),
      networkFee: Big(1),
    });

    expect(outputAmount.toFixed(8)).toEqual('0.93105882');
  });

  it('SELL input from ouput', async () => {
    const bid = 8500;
    const serviceFeeFraction = Big(0.01);
    const output = Big(0.03);
    const expectedConvRate = Big(1).div(bid);
    const expectedNetworkFee = Big(0);

    const expectedServiceFee = output
      .mul(expectedConvRate)
      .mul(serviceFeeFraction.div(Big(1).minus(serviceFeeFraction)))
      .toFixed(6);

    const conversionRate = calcFns.getConversionRate(
      { bid, ask: 8500 },
      undefined,
      calcFns.Side.SELL
    );

    const { serviceFee, networkFee } = calcFns.calcSellFees(
      conversionRate,
      null,
      output
    );

    expect(serviceFee.toFixed(6)).toEqual(expectedServiceFee);
    expect(conversionRate).toEqual(expectedConvRate);
    expect(networkFee).toEqual(expectedNetworkFee);
  });

  it('SELL output from input', async () => {
    const bid = 8500;
    const serviceFeeFraction = Big(0.01);
    const input = Big(3);
    const expectedConvRate = Big(bid);
    const expectedNetworkFee = Big(0);

    const expectedServiceFee = input
      .minus(expectedNetworkFee)
      .mul(expectedConvRate)
      .mul(serviceFeeFraction)
      .toFixed(6);

    const conversionRate = calcFns.getConversionRate(
      { bid, ask: 8500 },
      +input,
      calcFns.Side.SELL
    );

    const { serviceFee, networkFee } = calcFns.calcSellFees(
      conversionRate,
      input,
      null
    );

    expect(serviceFee.toFixed(6)).toEqual(expectedServiceFee);
    expect(conversionRate).toEqual(expectedConvRate);
    expect(networkFee).toEqual(expectedNetworkFee);
  });

  it('BUY input from ouput', async () => {
    const ask = 8500;
    const serviceFeeFraction = Big(0.01);
    const output = Big(0.03);
    const expectedConvRate = Big(ask);
    const expectedNetworkFee = Big(1);

    const expectedServiceFee = output
      .mul(expectedConvRate)
      .mul(serviceFeeFraction)
      .toFixed(6);

    const conversionRate = calcFns.getConversionRate(
      { bid: 8500, ask },
      undefined,
      calcFns.Side.BUY
    );

    const { serviceFee, networkFee } = calcFns.calcBuyFees(
      conversionRate,
      null,
      output
    );

    expect(serviceFee.toFixed(6)).toEqual(expectedServiceFee);
    expect(conversionRate).toEqual(expectedConvRate);
    expect(networkFee).toEqual(expectedNetworkFee);
  });

  it('BUY output from input', async () => {
    const ask = 8500;
    const serviceFeeFraction = Big(0.01);
    const input = Big(3);
    const expectedConvRate = Big(1).div(Big(ask));
    const expectedNetworkFee = Big(1);

    const expectedServiceFee = input
      .minus(expectedNetworkFee)
      .mul(expectedConvRate)
      .mul(serviceFeeFraction.div(Big(1).plus(serviceFeeFraction)))
      .toFixed(6);

    const conversionRate = calcFns.getConversionRate(
      { bid: 8500, ask },
      +input,
      calcFns.Side.BUY
    );

    const { serviceFee, networkFee } = calcFns.calcBuyFees(
      conversionRate,
      input,
      null
    );

    expect(serviceFee.toFixed(6)).toEqual(expectedServiceFee);
    expect(conversionRate).toEqual(expectedConvRate);
    expect(networkFee).toEqual(expectedNetworkFee);
  });
});
