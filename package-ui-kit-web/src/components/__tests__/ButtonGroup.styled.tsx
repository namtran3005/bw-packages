import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../ButtonGroup/ButtonGroup.styled';

describe('ButtonGroup', () => {
  it('should render button group component', () => {
    const wrapper = shallow(<RootComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render button group', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render full width button group', () => {
    const wrapper = shallow(<Root fullWidth />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render centered button group', () => {
    const wrapper = shallow(<Root align="center" />);
    expect(wrapper).toMatchSnapshot();
  });
});
