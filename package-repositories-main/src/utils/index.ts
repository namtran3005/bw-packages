import { mongo } from 'mongoose';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const generateObjectId = (): any => new mongo.ObjectId();

export { createBatchedCursor } from './createBatchedCursor';
export { createProjection } from './createProjection';
export { createFindProjection } from './createFindProjection';
