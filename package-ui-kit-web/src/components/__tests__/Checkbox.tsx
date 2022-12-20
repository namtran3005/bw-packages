import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Checkbox } from '../Checkbox';

const defaultProps = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  foreground: 'primaryLilac' as 'primaryLilac',
  checked: true,
};

describe('Checkbox', () => {
  it('should render checked checkbox', () => {
    const { baseElement } = renderWithTestHarness(
      <Checkbox {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
