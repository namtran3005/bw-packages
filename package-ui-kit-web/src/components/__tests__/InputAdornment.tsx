import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { InputAdornment } from '../InputAdornment';

const defaultProps = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'start' as 'start',
};

describe('InputAdornment', () => {
  it('should render input label', () => {
    const { baseElement } = renderWithTestHarness(
      <InputAdornment {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
