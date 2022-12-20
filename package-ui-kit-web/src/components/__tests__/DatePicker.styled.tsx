import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../DatePicker/DatePicker.styled';

describe('Button', () => {
  it('should render styled theme provider', () => {
    const wrapper = shallow(
      <Root>
        <div />
      </Root>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render theme provider component', () => {
    const wrapper = shallow(
      <RootComponent>
        <div />
      </RootComponent>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
