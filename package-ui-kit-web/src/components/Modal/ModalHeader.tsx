import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Colors } from '@bitwala-cryptobank-squad/package-theme';

import { IconButtonProps } from '../IconButton';
import { Typography, TypographyProps } from '../Typography';
import { ModalProps } from './types';
import ModalBackButton from './ModalBackButton';

const StyledModalHeader = styled.div`
  &&& {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 76px;
    background-color: ${Colors.get('white')};
    padding: 0;

    > .MuiButtonBase-root {
      width: auto !important;
    }

    > button {
      position: absolute;
      width: auto;
      height: auto;
      padding: 0;
      margin: 0 !important;
    }
    > button:hover {
      background-color: unset;
    }
  }

  .right-header-element {
    position: absolute;
    right: 5%;
  }
`;

const StyledModalTitle = styled(Typography.SmallBody).withConfig({
  shouldForwardProp: (
    prop: keyof (TypographyProps & Pick<ModalProps, 'doNotRestrictTitleWidth'>)
  ) => prop !== 'doNotRestrictTitleWidth',
})`
  &&& {
    color: ${Colors.get('primaryBlack')};
    font-size: 14px;
    height: fit-content;
    position: relative;
    max-width: ${(props) => (props.doNotRestrictTitleWidth ? 'unset' : '50%')};
    margin: auto;
  }
`;

interface ModalHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.ForwardedRef<any>;
  onClose?: IconButtonProps['onClick'];
  title?: ReactNode;
  rightHeaderElement?: ModalProps['rightHeaderElement'];
  showDismissButton?: boolean;
  doNotRestrictTitleWidth?: ModalProps['doNotRestrictTitleWidth'];
}

const ModalHeader: React.FC<ModalHeaderProps> = React.forwardRef(
  (props, ref) => (
    <StyledModalHeader ref={ref}>
      {props.showDismissButton && <ModalBackButton onClose={props.onClose} />}
      {props.title && (
        <StyledModalTitle
          textAlign="center"
          doNotRestrictTitleWidth={props.doNotRestrictTitleWidth}
        >
          {props.title}
        </StyledModalTitle>
      )}
      {props.rightHeaderElement && (
        <span className="right-header-element">{props.rightHeaderElement}</span>
      )}
    </StyledModalHeader>
  )
);

export default ModalHeader;
