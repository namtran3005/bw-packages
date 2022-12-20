import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Modal, ModalProps } from '../Modal';

const defaultModalProps: ModalProps = { open: true };

describe('Modal', () => {
  it('should render Modal', () => {
    const { baseElement } = renderWithTestHarness(
      <Modal {...defaultModalProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
