import { BackdropProps as MuiBackdropProps } from '@material-ui/core/Backdrop';
import { DialogProps as MuiDialogProps } from '@material-ui/core/Dialog';
import { TransitionProps as MuiTransitionProps } from '@material-ui/core/transitions/transition';

import { ColorsType } from '@bitwala-cryptobank-squad/package-theme';

import { CSSProp } from 'styled-components';
import { ReactNode } from 'react';
import { IconButtonProps } from '../IconButton';

type Docked = 'left' | 'right' | 'middle';

export interface TransitionProps extends MuiTransitionProps {
  docked: Docked;
}

export interface ModalProps
  extends Omit<MuiDialogProps, 'propTypes' | 'TransitionProps' | 'title'> {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
  paperForeground?: ColorsType;
  docked?: Docked;
  onClose?: IconButtonProps['onClick'];
  position?: 'left' | 'right' | 'middle';
  ariaLabel?: string;
  rightHeaderElement?: React.ReactElement | React.ReactElement[];
  showDismissButton?: boolean;
  maxPaperWidth?: CSSProp;
  title?: ReactNode;
  doNotRestrictTitleWidth?: boolean;
  doNotStretchContentHeight?: boolean;
}

export interface BackdropProps extends MuiBackdropProps {
  open: boolean;
  background?: ColorsType;
}

export { ModalContentProps } from './ModalContent';
