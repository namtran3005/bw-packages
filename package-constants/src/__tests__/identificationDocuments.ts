import { identificationDocuments } from '../identificationDocuments';

describe('identificationDocuments EN lists', () => {
  it('should match snapshot', () => {
    expect(identificationDocuments).toMatchSnapshot();
  });
});
