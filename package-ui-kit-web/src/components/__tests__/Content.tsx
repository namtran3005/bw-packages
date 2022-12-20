import * as React from 'react';
import { shallow } from 'enzyme';
import { Content } from '../Content';

const defaultProps = {
  narrow: true,
  drawerOpen: true,
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  spacing: 24 as 24,
};

describe('Content', () => {
  it('should render content component', () => {
    const wrapper = shallow(<Content {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
