/* eslint-disable @typescript-eslint/no-explicit-any*/

import { scaChallengeValidationSchema } from '../webhooks';
import { ScaChallengeEvent } from '../../../types';

const validate = (input: any) => {
  try {
    scaChallengeValidationSchema.validateSync(input);
    throw new Error('failed to validate');
  } catch (e) {
    return e;
  }
};

const validInput: ScaChallengeEvent = {
  amount: { value: '12312', unit: 'cents', currency: 'EUR' },
  merchant: { name: 'merchant', country: '276', url: 'http://example.com' },
  challengedAt: new Date(),
  expiresAt: new Date(),
  declineChangeRequestId: 'declinedChangeRequestId',
  channel: 'browser',
  cardId: 'someCardId',
  personId: 'personId',
  authenticateChangeRequestId: 'authenticateChangeRequestId',
};

describe('Sca challenge schema', () => {
  it('should not throw on valid input', () => {
    expect(() =>
      scaChallengeValidationSchema.validateSync(validInput)
    ).not.toThrow();
  });

  it('should not throw on valid input with no merchant url', () => {
    expect(() =>
      scaChallengeValidationSchema.validateSync({...validInput, merchant: { name: 'merchant', country: '276'}})
    ).not.toThrow();
  });

  it('should throw if expiresAt is omitted', () => {
    const input = {
      ...validInput,
      expiresAt: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('expiresAt');
    expect(error.type).toBe('required');
  });
});
