import { backgroundJobLogsRepo as original } from '../index';

export const backgroundJobLogsRepo: {
  [K in keyof typeof original]: jest.Mock;
} = {
  insert: jest.fn(() => Promise.resolve(null)),
};
