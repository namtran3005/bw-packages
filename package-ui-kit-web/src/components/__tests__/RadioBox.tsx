import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { RadioBox } from '../RadioBox';

const defaultProps = {};

describe('RadioBox', () => {
  it('should render radio box', () => {
    const { baseElement } = renderWithTestHarness(
      <RadioBox {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render checked radio box', () => {
    const { baseElement } = renderWithTestHarness(
      <RadioBox checked {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
