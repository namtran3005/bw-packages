import * as React from 'react';
import { shallow } from 'enzyme';
import { Snackbar } from '../Snackbar';

const defaultProps = {
  open: true,
};

describe('Snackbar', () => {
  it('should render Snackbar', () => {
    const wrapper = shallow(<Snackbar {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
