import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { SidepanelHelpDivider } from '../SidepanelHelpDivider';

describe('SidepanelHelpDivider', () => {
  it('should render divider', () => {
    const { baseElement } = renderWithTestHarness(<SidepanelHelpDivider />);
    expect(baseElement).toMatchSnapshot();
  });
});
