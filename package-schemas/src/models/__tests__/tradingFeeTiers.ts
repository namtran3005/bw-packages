import * as Mongoose from 'mongoose';
import { Error } from 'mongoose';
import {
  TradingFeeTier,
  tradingFeeTiersSchema,
} from '../tradingFeeTiers';

describe('tradingFeeTiers', () => {
  it('should return errors as undefined after sync validation', () => {
    const config: TradingFeeTier = {
      tierId: 'T0',
      standardTcFeeOption: 'T0',
      savingsPlanTcFeeOption: 'T0_AB',
      volumeLowerBound: 0,
      volumeUpperBound: 10000,
    };

    const Model = Mongoose.model(
      'TradingFeeTiers',
      tradingFeeTiersSchema
    );
    const feeConfig = new Model(config);

    const error = feeConfig.validateSync();
    expect(error).toBeUndefined();
  });

  it('should return error after sync validation when option is missing', () => {
    const configMissingOption = {
      tierId: 'T0',
      volumeLowerBound: 0,
      volumeUpperBound: 10000,
    } as TradingFeeTier;

    const Model = Mongoose.model(
      'TradingFeeTiers',
      tradingFeeTiersSchema
    );
    const tradingFeeTier = new Model(
      configMissingOption
    );

    const error = tradingFeeTier.validateSync();
    expect(error).toBeInstanceOf(Error.ValidationError);
  });
});
