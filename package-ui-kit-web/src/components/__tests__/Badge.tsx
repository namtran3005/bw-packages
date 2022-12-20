import * as React from 'react';
import { shallow } from 'enzyme';
import { Badge } from '../Badge';

const defaultProps = {};

describe('Badge', () => {
  it('should render Badge', () => {
    const wrapper = shallow(<Badge {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
