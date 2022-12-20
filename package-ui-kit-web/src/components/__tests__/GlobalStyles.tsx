import * as React from 'react';
import { shallow } from 'enzyme';
import { GlobalStyles } from '../GlobalStyles';

describe('GlobalStyles', () => {
  it('should render Globalstyles', () => {
    const wrapper = shallow(<GlobalStyles />);
    expect(wrapper).toMatchSnapshot();
  });
});
