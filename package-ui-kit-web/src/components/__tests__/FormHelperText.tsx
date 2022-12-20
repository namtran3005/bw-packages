import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { FormHelperText, FormHelperTextProps } from '../FormHelperText';

const defaultProps: FormHelperTextProps = {};

describe('FormHelperText', () => {
  it('should render form helper text', () => {
    const { baseElement } = renderWithTestHarness(
      <FormHelperText {...defaultProps}>Description</FormHelperText>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
