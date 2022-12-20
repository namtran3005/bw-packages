import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { CircularProgress } from '../CircularProgress';

const defaultProps = {};

describe('CircularProgress', () => {
  it('should render circular progress', () => {
    const { baseElement } = renderWithTestHarness(
      <CircularProgress {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render determinate circular progress', () => {
    const { baseElement } = renderWithTestHarness(
      <CircularProgress variant="determinate" {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render indeterminate circular progress', () => {
    const { baseElement } = renderWithTestHarness(
      <CircularProgress variant="indeterminate" {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render circular progress custom foreground', () => {
    const { baseElement } = renderWithTestHarness(
      <CircularProgress
        variant="determinate"
        foreground="success"
        {...defaultProps}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
