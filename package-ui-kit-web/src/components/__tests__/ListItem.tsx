import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { ListItem } from '../List';

describe('ListItem', () => {
  it('should render ListItem', () => {
    const { baseElement } = renderWithTestHarness(
      <ListItem selected={false} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render selected ListItem', () => {
    const { baseElement } = renderWithTestHarness(<ListItem selected />);
    expect(baseElement).toMatchSnapshot();
  });
});
