import { germanStateCodes } from '../';

describe('germanStateCodes EN lists', () => {
  it('should match snapshot', () => {
    expect(germanStateCodes).toMatchSnapshot();
  });
});
