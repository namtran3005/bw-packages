import * as React from 'react';
import { shallow } from 'enzyme';
import { Paper } from '../Paper';

const defaultProps = {};

describe('Paper', () => {
  it('should render paper', () => {
    const wrapper = shallow(<Paper {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
