import * as React from 'react';
import { shallow } from 'enzyme';
import { TransitionCollapse } from '../TransitionCollapse';

describe('TransitionCollapse', () => {
  it('should render TransitionCollapse', () => {
    const wrapper = shallow(<TransitionCollapse />);
    expect(wrapper).toMatchSnapshot();
  });
});
