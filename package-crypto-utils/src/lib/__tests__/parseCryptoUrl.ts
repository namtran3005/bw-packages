import { parseCryptoUrl } from '../parseCryptoUrl';
import { Coin } from '../types';

// Data format: [uri, expected address, expected amount]
const testData = [
  [
    'tbtc',
    'bitcoin:2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz?amount=0.1',
    '2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz',
    '0.1',
  ],
  [
    'tbtc',
    'bitcoin: 2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz?amount=0.2',
    '2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz',
    '0.2',
  ],
  [
    'tbtc',
    'bitcoin:2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz?amount=0.1&value=0.2',
    '2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz',
    '0.1',
  ],
  [
    'tbtc',
    'bitcoin:2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz?amount=0.1&amount=0.2&amount=0.3',
    '2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz',
    '',
  ],
  [
    'teth',
    'ethereum:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?value=1&gas=42000',
    '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
    '1',
  ],
  [
    'teth',
    'ethereum: 0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?value=1&gas=42000',
    '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
    '1',
  ],
  [
    'teth',
    'ethereum:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?amount=1.1&gas=42000',
    '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
    '1.1',
  ],
  [
    'teth',
    'ethereum:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?amount=1.1&value=2.2&gas=42000',
    '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
    '2.2',
  ],
  [
    'teth',
    'ethereum:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?value=1.1&value=2.2&gas=42000',
    '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
    '',
  ],
  [
    'teth',
    'ethereum:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?amount=1.1&amount=2.2&gas=42000',
    '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
    '',
  ],
  [
    'teth',
    'etherem:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?amount=1.1&value=2.2&gas=42000',
    '',
    '',
  ],
  [
    'teth',
    'ether:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?value=2.2&gas=42000',
    '',
    '',
  ],
  [
    'tbtc',
    'bitcoi:0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8?amount=1',
    '',
    '',
  ],
  [
    'tbtc',
    'baitcoin://2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz?amount=0.125874',
    '',
    '',
  ],
  [
    'tbtc',
    'litecoin:2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz?amount=0.125874',
    '',
    '',
  ],
  [
    'tbtc',
    '2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz',
    '2N8hCvc5EdifZ2ggYLsU2CriYwtUrYgnCKz',
    '',
  ],
  [
    'tbtc',
    'tb1qeq5xwek6798jaumql0tqxm0v67030dh9dl6s40kqfvksxyltd9rsszuxz8',
    'tb1qeq5xwek6798jaumql0tqxm0v67030dh9dl6s40kqfvksxyltd9rsszuxz8',
    '',
  ],
];

describe('parseCryptoUrl', () => {
  testData.forEach(item => {
    const [coin, uri, address, amount] = item;
    const testType = !address ? 'UNHAPPY' : 'HAPPY';
    const addressExpectation = !address ? 'empty address' : 'wallet address';
    const amountExpectation = !amount ? 'and empty amount' : 'and amount value';

    it(`[${testType}] should return ${addressExpectation} ${amountExpectation}`, () => {
      const parsed = parseCryptoUrl(coin as Coin, uri);

      expect(parsed.address).toBe(address);
      expect(parsed.amount).toBe(amount);
    });
  });
});
