/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBatchedCursor } from '../createBatchedCursor';

describe('createBatchedCursor', () => {
  it('returns batched cursor', () => {
    const batchedCursor = createBatchedCursor({} as any, 1);
    expect(batchedCursor).toMatchObject({
      hasNext: expect.any(Function),
      next: expect.any(Function),
    });
  });

  describe('batched cursor', () => {
    const mongooseCursor: any = {
      next: jest.fn(),
    };

    it('returns batch of records', async () => {
      jest
        .spyOn(mongooseCursor, 'next')
        .mockResolvedValueOnce({})
        .mockResolvedValueOnce({})
        .mockResolvedValueOnce({})
        .mockResolvedValueOnce(null);

      const batchedCursor = createBatchedCursor(mongooseCursor, 2);

      const batch1 = await batchedCursor.next();
      expect(batch1).toMatchObject([{}, {}]);

      const batch2 = await batchedCursor.next();
      expect(batch2).toMatchObject([{}]);

      const batch3 = await batchedCursor.next();
      expect(batch3).toMatchObject([]);
    });

    it('returns hasNext false if cursor closed', async () => {
      jest.spyOn(mongooseCursor, 'next').mockResolvedValueOnce(null);

      const batchedCursor = createBatchedCursor(mongooseCursor, 2);

      const batch1 = await batchedCursor.next();
      expect(batch1).toMatchObject([]);

      expect(batchedCursor.hasNext()).toBeFalsy();
    });
  });
});
