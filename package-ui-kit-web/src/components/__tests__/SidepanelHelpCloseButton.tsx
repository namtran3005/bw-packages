import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { SidepanelHelpCloseButton } from '../SidepanelHelpCloseButton';

describe('SidepanelHelpCloseButton', () => {
  it('should render close button', () => {
    const { baseElement } = renderWithTestHarness(<SidepanelHelpCloseButton />);
    expect(baseElement).toMatchSnapshot();
  });
});
