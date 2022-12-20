import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Tabs } from '../Tabs';
import { TabsItem } from '../TabsItem';

const defaultProps = {
  value: 0,
};

describe('Tabs', () => {
  it('should render Tabs', () => {
    const { baseElement } = renderWithTestHarness(
      <Tabs {...defaultProps}>
        <TabsItem label="First Item">First Item Content</TabsItem>
      </Tabs>
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Tabs with only text content', () => {
    const { baseElement } = renderWithTestHarness(
      <Tabs {...defaultProps}>Random Text Content</Tabs>
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Tabs and click with listener', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onChangeListener = jest.fn();

    const { baseElement } = renderWithTestHarness(
      <Tabs {...defaultProps} onChange={onChangeListener}>
        <TabsItem label="First Tab">Content</TabsItem>
      </Tabs>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
