import * as React from 'react';
import { shallow } from 'enzyme';
import { Root, RootComponent } from '../TableRow/TableRow.styled';

describe('TableRow', () => {
  it('should render table row', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table row root component', () => {
    const wrapper = shallow(<RootComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table row with background', () => {
    const wrapper = shallow(<Root background="primaryLilac" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table row with background and alpha', () => {
    const wrapper = shallow(
      <Root background="primaryLilac" backgroundAlpha={0.5} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
