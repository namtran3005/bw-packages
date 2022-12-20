import * as React from 'react';
import { shallow } from 'enzyme';
import { TabsItem } from '../TabsItem';

const defaultProps = {
  label: 'First Tab',
};

describe('TabsItem', () => {
  it('should render TabsItem', () => {
    const wrapper = shallow(<TabsItem {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
