import { upsertAutomaticAccountClosureRequests } from '../lib/upsertAutomaticAccountClosureRequests';
import { findOne } from '../lib/findOne';


import { automaticAccountClosureRequestsRepo } from '../index';

describe('automatic account closure requests repo', () => {
  it('should export upsert method', () => {
    expect(automaticAccountClosureRequestsRepo.upsert).toBe(upsertAutomaticAccountClosureRequests);
  });
  it('should export find method', () => {
    expect(automaticAccountClosureRequestsRepo.findOne).toBe(findOne);
  });
});
