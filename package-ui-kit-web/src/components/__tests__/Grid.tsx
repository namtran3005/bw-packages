import * as React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';

const defaultProps = {};
const defaultItemProps = {};

describe('Grid', () => {
  it('should render grid with inner grid item', () => {
    const wrapper = shallow(
      <Grid {...defaultProps}>
        <Grid.Item {...defaultItemProps} />
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render grid with grid item', () => {
    const wrapper = shallow(
      <Grid {...defaultProps}>
        <GridItem {...defaultItemProps} />
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render inner grid item', () => {
    const wrapper = shallow(<GridItem {...defaultItemProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render grid item', () => {
    const wrapper = shallow(<GridItem {...defaultItemProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
