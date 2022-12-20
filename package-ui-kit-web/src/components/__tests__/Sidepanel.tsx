import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Sidepanel } from '../Sidepanel';

describe('Sidepanel', () => {
  it('should render Sidepanel', () => {
    const { baseElement } = renderWithTestHarness(<Sidepanel />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Sidepanel with logo - 1', () => {
    const { baseElement } = renderWithTestHarness(<Sidepanel logo />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Sidepanel with logo - 2', () => {
    const { baseElement } = renderWithTestHarness(
      <Sidepanel backgroundImage="url" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
