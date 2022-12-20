// @deprecated
import React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Backdrop } from '../Modal/Backdrop';

describe('Backdrop', () => {
  it('should render open Backdrop', () => {
    const { baseElement } = renderWithTestHarness(<Backdrop open />);
    expect(baseElement).toMatchSnapshot();
  });
  it('should render closed Backdrop', () => {
    const { baseElement } = renderWithTestHarness(<Backdrop open={false} />);
    expect(baseElement).toMatchSnapshot();
  });
});
