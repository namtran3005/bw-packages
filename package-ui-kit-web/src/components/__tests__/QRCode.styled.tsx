import * as React from 'react';
import { shallow } from 'enzyme';
import { Root } from '../QRCode/QRCode.styled';

describe('QRCode', () => {
  it('should render QRCode', () => {
    expect(shallow(<Root value="test value" />)).toMatchSnapshot();
  });
});
