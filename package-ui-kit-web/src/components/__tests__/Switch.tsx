import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Switch } from '../Switch';

const defaultProps = {};

describe('Switch', () => {
  it('should render switch', () => {
    const { baseElement } = renderWithTestHarness(<Switch {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
