import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../Paper/Paper.styled';

describe('Paper', () => {
  it('should render paper', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render paper with background', () => {
    const wrapper = shallow(<Root background="primaryLilac" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render paper with background alpha', () => {
    const wrapper = shallow(<Root backgroundAlpha={0.5} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render paper with background and alpha', () => {
    const wrapper = shallow(
      <Root background="primaryLilac" backgroundAlpha={0.5} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render paper with spacing', () => {
    const wrapper = shallow(<Root spacing={24} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render rounded paper', () => {
    const wrapper = shallow(<Root rounded />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render highlighted paper', () => {
    const wrapper = shallow(<Root highlight="primaryLilac" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render paper component', () => {
    const wrapper = shallow(<RootComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
