import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { InputLabel } from '../InputLabel';

const defaultProps = {};

describe('InputLabel', () => {
  it('should render input label', () => {
    const { baseElement } = renderWithTestHarness(
      <InputLabel {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
