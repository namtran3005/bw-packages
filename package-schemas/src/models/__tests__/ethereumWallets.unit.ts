import * as Mongoose from 'mongoose';
import { Error } from 'mongoose';
import {
  DataProvider,
  EthCoin,
  EthereumWalletInput,
  ethereumWalletSchema,
} from '../ethereumWallets';

describe('ethereumWallets', () => {
  it('should return errors as undefined after sync validation', () => {
    const ethereumWallet: EthereumWalletInput = {
      owner: '123',
      balance: '0',
      spendableBalance: '0',
      coin: EthCoin.ETH,
      devices: [],
      cipherAlgorithm: '0102',
      tag: '0102',
      initializationVector: '0102',
      softwareKey: '0102',
      walletDerivationPath: "m/44'/60'/0'/0/0",
      receiveAddresses: [],
      dataProvider: DataProvider.Upvest,
    };

    const Model = Mongoose.model('EthereumWallets', ethereumWalletSchema);
    const error = new Model(ethereumWallet).validateSync();
    expect(error).toBeUndefined();
  });

  it('should return error after sync validation when `dataProvider` is missing', () => {
    const ethereumWalletWithMissingDataProvider = ({
      owner: '123',
      balance: '0',
      spendableBalance: '0',
      coin: EthCoin.ETH,
      devices: [],
      cipherAlgorithm: '0102',
      tag: '0102',
      initializationVector: '0102',
      softwareKey: '0102',
      walletDerivationPath: "m/44'/60'/0'/0/0",
      receiveAddresses: [],
    } as unknown) as EthereumWalletInput;

    const Model = Mongoose.model('EthereumWallets', ethereumWalletSchema);
    const error = new Model(
      ethereumWalletWithMissingDataProvider
    ).validateSync();
    expect(error).toBeInstanceOf(Error.ValidationError);
  });
});
