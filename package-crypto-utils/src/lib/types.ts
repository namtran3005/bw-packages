export enum AddressType {
  'P2SH' = 'p2sh',
  'P2SHP2WSH' = 'p2shP2wsh',
  'P2WSH' = 'p2wsh',
}

export enum Coin {
  'BTC' = 'btc',
  'TBTC' = 'tbtc',
  'ETH' = 'eth',
  'TETH' = 'teth',
}

export type BtcCoin = Coin.BTC | Coin.TBTC;
export type EthCoin = Coin.ETH | Coin.TETH;
