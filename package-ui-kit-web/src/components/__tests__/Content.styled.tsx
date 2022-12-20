import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../Content/Content.styled';

describe('Content', () => {
  it('should render content component', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render content root component', () => {
    const wrapper = shallow(<RootComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render content component with open drawer', () => {
    const wrapper = shallow(<Root drawerOpen />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render content component with spacing', () => {
    const wrapper = shallow(<Root spacing={24} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render narrow content component', () => {
    const wrapper = shallow(<Root narrow />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render narrow content component with text aligned right', () => {
    const wrapper = shallow(<Root textAlign="right" />);
    expect(wrapper).toMatchSnapshot();
  });
});
