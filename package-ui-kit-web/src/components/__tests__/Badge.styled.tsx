import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../Badge/Badge.styled';

const defaultProps = {};

describe('Badge', () => {
  it('should render Badge RootComponent', () => {
    expect(shallow(<RootComponent {...defaultProps} />)).toMatchSnapshot();
  });
  it('should render Badge', () => {
    expect(shallow(<Root {...defaultProps} />)).toMatchSnapshot();
  });
  it('should render Badge with background', () => {
    expect(
      shallow(<Root {...defaultProps} background="white" />)
    ).toMatchSnapshot();
  });
});
