const mockedLoggerFn: {
  [index: string]: unknown;
} = {};

// TODO temporary fix until main server is upgraded to ts 4 too. Once upgraded
// we can change jest.fn<unknown, any> to jest.fn so the correct types will be inferred
export const logger = jest.fn<unknown, any>((name: string) => {
  if (mockedLoggerFn[name]) return mockedLoggerFn[name];

  mockedLoggerFn[name] = {
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  };
  return mockedLoggerFn[name];
});
