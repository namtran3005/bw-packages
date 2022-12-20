import * as React from 'react';
import { shallow } from 'enzyme';
import { Root } from '../Drawer/Drawer.styled';

const props = {};

describe('Drawer', () => {
  it('should render drawer', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper = shallow(<Root {...(props as any)} />);
    expect(wrapper).toMatchSnapshot();
  });
});
