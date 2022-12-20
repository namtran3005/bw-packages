import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { ProgressBar } from '../ProgressBar';

const defaultProps = {};

describe('ProgressBar', () => {
  it('should render progress bar', () => {
    const { baseElement } = renderWithTestHarness(
      <ProgressBar {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render determinate progress bar', () => {
    const { baseElement } = renderWithTestHarness(
      <ProgressBar {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render indeterminate progress bar', () => {
    const { baseElement } = renderWithTestHarness(
      <ProgressBar {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render progress bar custom foreground', () => {
    const { baseElement } = renderWithTestHarness(
      <ProgressBar
        variant="determinate"
        foreground="success"
        {...defaultProps}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
