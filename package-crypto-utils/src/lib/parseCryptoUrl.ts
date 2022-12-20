// eslint-disable-next-line import/default
import parser from 'query-string';
import { Coin } from './types';
import { testAddress } from './testAddress';

export enum CryptoProtocols {
  BTC = 'bitcoin:',
  ETH = 'ethereum:',
}

export interface ParsedCryptoUrl {
  address: string;
  amount: string;
  value?: string;
  [key: string]: string | undefined;
}

/**
 * Parses wallet address and other props if exists in given uri
 * Returns wallet address and amount at least
 *
 * @param {String} uri Ex: 'bitcoin:address?amount=amount&other=other
 * @returns {ParsedCryptoUrl}
 */
export const parseCryptoUrl = (coin: Coin, uri: string): ParsedCryptoUrl => {
  uri = uri.trim();
  let returnVal: ParsedCryptoUrl = { address: '', amount: '' };

  const isUriValid = /(ethereum|bitcoin):([ a-zA-Z0-9]+)/gi.test(uri);
  if (!isUriValid) {
    // Some exchange's qrcode is not includes protocol (just free text format)
    // Check qrcode content against to valid wallet address
    if (testAddress(coin, uri)) {
      returnVal.address = uri;
    }
    return returnVal;
  }

  // eslint-disable-next-line import/no-named-as-default-member
  const { url, query } = parser.parseUrl(uri);
  let address = url
    .replace(CryptoProtocols.BTC, '')
    .replace(CryptoProtocols.ETH, '');
  address = address.trim();

  if (!testAddress(coin, address)) {
    return returnVal;
  }

  const isEthereum = url.includes(CryptoProtocols.ETH);

  // Btc: BIP0021 amount field is `amount`
  // Eth: EIP681 amount field is `value` so, prefer `value` if exists otherwise look for `amount`
  let amount = (isEthereum ? query.value || query.amount : query.amount) || '';

  // Set amount to empty if there are multiple amount in uri
  amount = typeof amount === 'string' ? amount : '';

  returnVal = { ...query, address, amount };

  // No need to return `value`, it's already converted to `amount`
  // eslint-disable-next-line no-prototype-builtins
  if (returnVal.hasOwnProperty('value')) {
    delete returnVal.value;
  }

  return returnVal;
};
