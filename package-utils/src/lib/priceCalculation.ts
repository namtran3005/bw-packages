import { Big } from 'big.js';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';

export interface Quote {
  bid: number;
  ask: number;
}

export enum Side {
  'BUY' = 'buy',
  'SELL' = 'sell',
}

export const currencyPrecision = {
  [Currencies.EUR]: 2,
  [Currencies.BTC]: 8,
  [Currencies.ETH]: 8,
};

export interface Price {
  amount?: number;
  currency: Currencies;
}

export interface PriceRequest {
  side: Side;
  input: Price;
  output: Price;
}

export interface Fees {
  serviceFee: Big;
  networkFee: Big;
}

export const priceCalculation = ({ bid, ask }: Quote, req: PriceRequest) => {
  const { input, output, side } = req;
  const inputBig = convertToBig(input);
  const outputBig = convertToBig(output);

  const conversionRate = getConversionRate({ bid, ask }, input.amount, side);

  const fees =
    side === Side.SELL
      ? calcSellFees(conversionRate, inputBig, outputBig)
      : calcBuyFees(conversionRate, inputBig, outputBig);

  const inputAmount = inputBig || inputFromOutput(req, conversionRate, fees);
  const outputAmount = outputBig || outputFromInput(req, conversionRate, fees);

  return {
    quote: { bid: bid.toFixed(2), ask: ask.toFixed(2) },
    input: {
      currency: input.currency,
      amount: inputAmount.toFixed(currencyPrecision[input.currency]),
    },
    output: {
      currency: output.currency,
      amount: outputAmount.toFixed(currencyPrecision[output.currency]),
    },
    fees: createFeesArray(req, fees, conversionRate),
  };
};

/**
 * 1. output from input:
 * SELL: Bitwala_Fee_Absolute = (Input - F_network) * conversionRate * %_fee_bitwala
 *
 * 2. input from output:
 * SELL: Bitwala_Fee_Absolute = Output * conversionRate * (%_fee_bitwala / (1 - %_fee_bitwala))
 */
export const calcSellFees = (
  conversionRate: Big,
  input: Big | null,
  output: Big | null
) => {
  const networkFee = Big(0);
  const serviceFeeFraction = Big(0.01);

  const serviceFeeOutput =
    input &&
    input
      .minus(networkFee)
      .mul(conversionRate)
      .mul(serviceFeeFraction);

  const serviceFeeInput =
    output &&
    output
      .mul(conversionRate)
      .mul(serviceFeeFraction.div(Big(1).minus(serviceFeeFraction)));

  return {
    networkFee,
    serviceFee: (serviceFeeInput || serviceFeeOutput) as Big,
  };
};

/**
 * 1. output from input:
 * BUY: Bitwala_Fee_Absolute = (Input - F_network) * conversionRate * (%_fee_bitwala / (1 + %_fee_bitwala))
 *
 * 2. input from output:
 * BUY: Bitwala_Fee_Absolute = Output * conversionRate * %_fee_bitwala
 */
export const calcBuyFees = (
  conversionRate: Big,
  input: Big | null,
  output: Big | null
) => {
  const networkFee = Big(1);
  const serviceFeeFraction = Big(0.01);

  const serviceFeeOutput =
    input &&
    input
      .minus(networkFee)
      .mul(conversionRate)
      .mul(serviceFeeFraction.div(Big(1).plus(serviceFeeFraction)));

  const serviceFeeInput =
    output && output.mul(conversionRate).mul(serviceFeeFraction);

  return {
    networkFee,
    serviceFee: (serviceFeeInput || serviceFeeOutput) as Big,
  };
};

/**
 * Input = Output * conversionRate + Bitwala_Fee_Absolute + F_network
 */
export const inputFromOutput = (
  { output }: PriceRequest,
  conversionRate: Big,
  { serviceFee, networkFee }: Fees
) => {
  const outputBig = convertToBig(output, false);

  const inputAmount = (outputBig &&
    outputBig
      .mul(conversionRate)
      .plus(serviceFee)
      .plus(networkFee)) as Big;

  return inputAmount;
};

/**
 * Output = (Input - F_network) * conversionRate - Bitwala_Fee_Absolute
 */
export const outputFromInput = (
  { input }: PriceRequest,
  conversionRate: Big,
  { serviceFee, networkFee }: Fees
) => {
  const inputBig = convertToBig(input, false);

  const outputAmount = (inputBig &&
    inputBig
      .minus(networkFee)
      .mul(conversionRate)
      .minus(serviceFee)) as Big;

  return outputAmount;
};

export const convertToBig = (price: Price, fixation = true) => {
  return price.amount
    ? fixation
      ? Big(Big(price.amount).toFixed(currencyPrecision[price.currency]))
      : Big(price.amount)
    : null;
};

export const createFeesArray = (
  { input }: PriceRequest,
  { serviceFee, networkFee }: Fees,
  conversionRate: Big
) => {
  if (input.amount) {
    serviceFee = serviceFee.div(conversionRate);
  }
  return [
    {
      type: 'service_fee',
      amount: serviceFee.toFixed(currencyPrecision[input.currency]),
      currency: input.currency,
    },
    {
      type: 'network_fee',
      amount: networkFee.toFixed(currencyPrecision[input.currency]),
      currency: input.currency,
    },
  ];
};

export const getConversionRate = (
  quote: Quote,
  inputAmount: number | undefined,
  side: Side
) => {
  let conversionRate: Big;
  const quotePrice = {
    [Side.BUY]: quote.ask,
    [Side.SELL]: quote.bid,
  }[side];

  if (side === Side.BUY) {
    conversionRate = inputAmount ? Big(1).div(quotePrice) : Big(quotePrice);
  } else {
    conversionRate = inputAmount ? Big(quotePrice) : Big(1).div(quotePrice);
  }

  return conversionRate;
};
