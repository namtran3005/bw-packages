import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Logo, LogoProps } from '../Logo';

const defaultLogoProps: LogoProps = {};
const defaultLogomarkProps: LogoProps = {
  variant: 'logomark',
};

describe('Logo', () => {
  it('should render Bitwala logo - 1', () => {
    const { baseElement } = renderWithTestHarness(
      <Logo {...defaultLogoProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render Bitwala logo - 2', () => {
    const { baseElement } = renderWithTestHarness(
      <Logo {...defaultLogomarkProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
