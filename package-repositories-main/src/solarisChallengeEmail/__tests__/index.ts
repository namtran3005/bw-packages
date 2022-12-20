import { insert } from '../lib/insert';
import { findOneByOwner } from '../lib/findByOwner';
import { markFinishedByRequestId } from '../lib/markFinishedByRequestId';
import { findLastFinishedByOwner } from '../lib/findLastFinishedByOwner';

import { solarisChallengeEmailRepo } from '../index';

describe('solaris challenge email repo', () => {
  it('should export insert method', () => {
    expect(solarisChallengeEmailRepo.insert).toBe(insert);
  });
  it('should export find last by owner method', () => {
    expect(solarisChallengeEmailRepo.findOneByOwner).toBe(findOneByOwner);
  });
  it('should export update request by requestId method', () => {
    expect(solarisChallengeEmailRepo.markFinishedByRequestId).toBe(
      markFinishedByRequestId
    );
  });
  it('should export find last successful email change', () => {
    expect(solarisChallengeEmailRepo.findLastFinishedByOwner).toBe(
      findLastFinishedByOwner
    );
  });
});
