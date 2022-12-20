import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { List } from '../List';

const defaultProps = {};
const defaultItemProps = {};
const defaultItemIconProps = {
  children: <div />,
};
const defaultSubheaderProps = {};

describe('List', () => {
  it('should render list', () => {
    const { baseElement } = renderWithTestHarness(<List {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render list item', () => {
    const { baseElement } = renderWithTestHarness(
      <List.Item {...defaultItemProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render list item icon', () => {
    const { baseElement } = renderWithTestHarness(
      <List.Item.Icon {...defaultItemIconProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render list subheader', () => {
    const { baseElement } = renderWithTestHarness(
      <List.Subheader {...defaultSubheaderProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
