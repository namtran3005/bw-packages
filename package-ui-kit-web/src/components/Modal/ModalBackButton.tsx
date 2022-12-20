import React from 'react';
import { Icons } from '../..';
import { IconButton, IconButtonProps } from '../IconButton';

function ModalBackButton({
  onClose,
}: {
  onClose?: IconButtonProps['onClick'];
}): React.ReactElement {
  return (
    <IconButton onClick={onClose} aria-label="Close">
      <Icons.ArrowLeft />
    </IconButton>
  );
}

export default ModalBackButton;
