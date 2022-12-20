import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Select } from '../Select';

const defaultProps = {};

describe('Select', () => {
  it('should render input label', () => {
    const { baseElement } = renderWithTestHarness(<Select {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
