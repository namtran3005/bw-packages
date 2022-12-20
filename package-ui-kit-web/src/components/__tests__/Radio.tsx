import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Radio } from '../Radio';

const defaultProps = {};

describe('Radio', () => {
  it('should render radio', () => {
    const { baseElement } = renderWithTestHarness(<Radio {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
