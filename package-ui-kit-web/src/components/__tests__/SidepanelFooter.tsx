import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { SidepanelFooter } from '../SidepanelFooter/';

describe('SidepanelFooter', () => {
  it('should render SidepanelFooter', () => {
    const { baseElement } = renderWithTestHarness(<SidepanelFooter />);
    expect(baseElement).toMatchSnapshot();
  });
});
