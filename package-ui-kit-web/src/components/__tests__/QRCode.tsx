import * as React from 'react';
import { shallow } from 'enzyme';
import { QRCode } from '../QRCode';

describe('QRCode', () => {
  it('should render menu', () => {
    const wrapper = shallow(<QRCode value="test value" />);
    expect(wrapper).toMatchSnapshot();
  });
});
