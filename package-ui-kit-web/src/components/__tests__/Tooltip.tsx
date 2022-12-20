import * as React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from '../Tooltip';

const defaultProps = {
  title: 'Tooltip content',
  children: <div />,
};

describe('Tooltip', () => {
  it('should render tooltip', () => {
    const wrapper = shallow(<Tooltip {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
