import { logger, loggers } from '../index';

describe('logger package', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('Should create new label', () => {
    logger('testing');
    expect(loggers.testing).toMatchSnapshot();
  });

  it('Should not create a new on existing labels', () => {
    logger('testing');
    const originalLabel = { ...loggers.testing };
    const returnedLabel = logger('testing');

    expect(returnedLabel).toEqual(originalLabel);
  });
});
