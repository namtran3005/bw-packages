import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Input } from '../Input';

const defaultProps = {};

describe('Input', () => {
  it('should render input', () => {
    const { baseElement } = renderWithTestHarness(<Input {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
