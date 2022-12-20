/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { shallow } from 'enzyme';
import { Root } from '../Table/Table.styled';

const props = {};

describe('Table', () => {
  it('should render table', () => {
    const wrapper = shallow(<Root {...(props as any)} />);
    expect(wrapper).toMatchSnapshot();
  });
});
