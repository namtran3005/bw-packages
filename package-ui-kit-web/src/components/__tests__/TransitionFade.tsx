import * as React from 'react';
import { shallow } from 'enzyme';
import { TransitionFade } from '../TransitionFade';

describe('TransitionFade', () => {
  it('should render TransitionFade', () => {
    const wrapper = shallow(<TransitionFade />);
    expect(wrapper).toMatchSnapshot();
  });
});
