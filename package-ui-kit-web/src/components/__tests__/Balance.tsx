import * as React from 'react';
import { Currencies } from '@bitwala-cryptobank-squad/package-utils';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Balance } from '../Balance';
import 'jest-styled-components';

const defaultProps = {
  currency: Currencies.EUR,
  children: '21312',
};

describe('Balance', () => {
  it('should render Balance', () => {
    const { baseElement } = renderWithTestHarness(
      <Balance {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Balance with foreground', () => {
    const { baseElement } = renderWithTestHarness(
      <Balance {...defaultProps} foreground="white" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
