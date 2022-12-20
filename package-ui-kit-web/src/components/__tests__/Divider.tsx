import * as React from 'react';
import { Divider } from '../Divider';
import { renderWithTestHarness } from '../../test-utils/test-utils';
const defaultProps = {};

describe('Divider', () => {
  it('should render divider', () => {
    const { baseElement } = renderWithTestHarness(
      <Divider {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
