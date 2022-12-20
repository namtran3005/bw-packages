import * as React from 'react';
import { shallow } from 'enzyme';
import { FormControl } from '../FormControl';

const defaultProps = {};

describe('FormControl', () => {
  it('should render form control', () => {
    const wrapper = shallow(<FormControl {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
