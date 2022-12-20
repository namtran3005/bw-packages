import * as React from 'react';
import { shallow } from 'enzyme';
import { RadioGroup } from '../RadioGroup';

const defaultProps = {};

describe('RadioGroup', () => {
  it('should render radio group', () => {
    const wrapper = shallow(<RadioGroup {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
