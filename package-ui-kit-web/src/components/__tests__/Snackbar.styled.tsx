import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../Snackbar/Snackbar.styled';

describe('Snackbar', () => {
  it('should render Snackbar', () => {
    const wrapper = shallow(<Root open />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render colored Snackbar', () => {
    const wrapper = shallow(
      <Root open background="white" foreground="white" />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Snackbar root component', () => {
    const wrapper = shallow(<RootComponent open />);
    expect(wrapper).toMatchSnapshot();
  });
});
