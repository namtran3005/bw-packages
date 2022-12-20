/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFindProjection } from '../createFindProjection';

describe('createFindProjection', () => {
  it('returns correct projection', () => {
    const projection = createFindProjection(['owner', 'id']);
    expect(projection).toMatchObject({
      _id: 1,
      owner: 1,
      id: 1,
    });
  });

  it('returns correct projection without _id', () => {
    const projection = createFindProjection(['owner']);
    expect(projection).toMatchObject({
      owner: 1,
    });
  });
});
