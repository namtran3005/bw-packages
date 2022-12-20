import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../Grid/Grid.styled';

describe('Grid', () => {
  it('should render Grid RootComponent', () => {
    expect(shallow(<RootComponent />)).toMatchSnapshot();
  });
  it('should render Grid', () => {
    expect(shallow(<Root fullHeight={false} />)).toMatchSnapshot();
  });
  it('should render Grid full height', () => {
    expect(shallow(<Root fullHeight />)).toMatchSnapshot();
  });
});
