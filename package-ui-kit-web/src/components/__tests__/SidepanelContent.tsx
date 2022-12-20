import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { SidepanelContent } from '../SidepanelContent';

describe('SidepanelContent', () => {
  it('should render SidepanelContent', () => {
    const { baseElement } = renderWithTestHarness(<SidepanelContent />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render SidepanelContent docked left', () => {
    const { baseElement } = renderWithTestHarness(
      <SidepanelContent docked="left" />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render SidepanelContent docked right', () => {
    const { baseElement } = renderWithTestHarness(
      <SidepanelContent docked="right" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
