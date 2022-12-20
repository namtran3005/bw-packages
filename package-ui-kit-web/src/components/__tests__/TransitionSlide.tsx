import * as React from 'react';
import { shallow } from 'enzyme';
import { TransitionSlide } from '../TransitionSlide';

const defaultProps = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  direction: 'right' as 'right',
};

describe('TransitionSlide', () => {
  it('should render TransitionSlide', () => {
    const wrapper = shallow(<TransitionSlide {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
