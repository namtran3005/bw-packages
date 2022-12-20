import * as React from 'react';
import { shallow } from 'enzyme';
import { ButtonGroup } from '../ButtonGroup';

const defaultProps = {
  fullWidth: true,
};

describe('ButtonGroup', () => {
  it('should render full width button group', () => {
    const wrapper = shallow(<ButtonGroup {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
