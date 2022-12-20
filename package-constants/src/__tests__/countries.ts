import { countries } from '../';

describe('countrieslists', () => {
  it('should match snapshot', () => {
    expect(countries).toMatchSnapshot();
  });
});
