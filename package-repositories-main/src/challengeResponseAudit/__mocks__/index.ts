export const challengeResponseAuditRepo = {
  findOneInitiated: jest.fn(() => Promise.resolve(null)),
  insert: jest.fn(() => Promise.resolve(null)),
};

export enum ChallengeResponsePurpose {
  BTC_SEND = 'BTC_SEND',
  BTC_SELL = 'BTC_SELL',
  BTC_BUY = 'BTC_BUY',
  ETH_SEND = 'ETH_SEND',
  ETH_SELL = 'ETH_SELL',
  ETH_BUY = 'ETH_BUY',
  LOGIN = 'LOGIN',
}

export enum ChallengeResponseStatus {
  INITIATED = 'INITIATED',
  NOT_VERIFIED = 'NOT_VERIFIED',
  COMPLETED = 'COMPLETED',
}
