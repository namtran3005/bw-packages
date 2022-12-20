import React from 'react';
import styled, { css } from 'styled-components';
import { Dialog as MuiDialog } from '@material-ui/core';
import { TransitionProps as MuiTransitionProps } from '@material-ui/core/transitions/transition';
import { Colors } from '@bitwala-cryptobank-squad/package-theme';

import { shadows } from '../Paper';
import { ModalContent } from './ModalContent';
import { TransitionFade, TransitionSlide } from './ModalTransitions';
import { ModalProps, TransitionProps } from './types';
import { StyledMuiBackdrop } from './Backdrop';

export const modalPaperStyle = ({
  docked,
  paperForeground,
  maxPaperWidth,
  doNotStretchContentHeight,
}: Pick<
  ModalProps,
  'docked' | 'paperForeground' | 'maxPaperWidth' | 'doNotStretchContentHeight'
>) => css`
  position: relative;
  width: 100%;
  max-width: ${maxPaperWidth || '423px'};
  height: ${doNotStretchContentHeight ? 'unset' : 'calc(100% - 64px)'};
  ${docked === 'right' && 'right: 32px;'}
  ${docked === 'left' && 'left: 32px;'}
  background: ${Colors.get(paperForeground || 'white')};
  margin-right: ${docked === 'right' ? 0 : 'auto'};
  margin-left: ${docked === 'left' ? 0 : 'auto'};
  align-self: ${docked && !doNotStretchContentHeight ? 'stretch' : 'auto'};
  box-shadow: ${shadows[24]};

  &:focus {
    outline: none;
  }
`;

delete MuiDialog['propTypes'];

export const StyledMuiDialog: React.FC<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ModalProps | { TransitionProps: any }
> = styled(MuiDialog).withConfig({
  shouldForwardProp: (prop) =>
    prop === 'ref' ||
    !['paperForeground', 'maxPaperWidth', 'doNotStretchContentHeight'].includes(
      prop
    ),
})`
  &&& {
    display: flex;
    padding: 0 !important;

    &:focus {
      outline: none;
    }

    .scrollPaper {
      width: 100%;
      box-sizing: border-box;
      position: relative;
    }
    .paper {
      ${modalPaperStyle}
    }
    .MuiDialog-paperScrollPaper {
      border-radius: 8px;
    }
  }
`;

const Slide = React.forwardRef(function Slide(props: TransitionProps, ref) {
  const { docked, ...cleanProps } = props;
  return (
    <TransitionSlide
      direction={docked === 'right' ? 'left' : 'right'}
      {...cleanProps}
      ref={ref}
    />
  );
});

const Fade = React.forwardRef(function Transition(
  props: MuiTransitionProps,
  ref
) {
  return <TransitionFade {...props} ref={ref} />;
});

const TransitionComponent = React.forwardRef((props: TransitionProps, ref) =>
  props.docked === 'middle' ? (
    <Fade {...props} ref={ref} />
  ) : (
    <Slide {...props} ref={ref} />
  )
);

export function Modal({
  children,
  title,
  onClose,
  ariaLabel,
  docked = 'right',
  paperForeground = 'white',
  rightHeaderElement,
  showDismissButton = true,
  open = false,
  maxPaperWidth,
  doNotRestrictTitleWidth,
  doNotStretchContentHeight,
}: ModalProps): React.ReactElement {
  // allow the fadeout transition to finish
  const [display, setDisplay] = React.useState<boolean>(false);

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null | undefined = undefined;

    if (open && !display) {
      timer = undefined;
      setDisplay(true);
    } else if (!open && display) {
      timer = setTimeout(() => setDisplay(false), 300);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [display, setDisplay, open]);

  return (
    <React.Fragment>
      {display && (
        <StyledMuiDialog
          aria-label={ariaLabel || title || 'popup-dialog'}
          BackdropProps={{ open }}
          onBackdropClick={onClose}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          BackdropComponent={StyledMuiBackdrop as any}
          open={display}
          TransitionComponent={
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            TransitionComponent as React.ForwardRefExoticComponent<any>
          }
          TransitionProps={
            {
              docked,
              in: open,
              enter: open,
              exit: !open,
              timeout: { enter: 300, exit: 300 },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any
          }
          docked={docked}
          classes={{
            root: 'root',
            scrollPaper: 'scrollPaper',
            scrollBody: 'scrollBody',
            paper: 'paper',
            paperScrollPaper: 'paperScrollPaper',
            paperScrollBody: 'paperScrollBody',
            paperFullWidth: 'paperFullWidth',
            paperFullScreen: 'paperFullScreen',
          }}
          paperForeground={paperForeground}
          closeAfterTransition
          maxPaperWidth={maxPaperWidth}
          doNotStretchContentHeight={doNotStretchContentHeight}
        >
          <ModalContent
            title={title}
            onClose={onClose}
            docked={docked}
            rightHeaderElement={rightHeaderElement}
            showDismissButton={showDismissButton}
            doNotRestrictTitleWidth={doNotRestrictTitleWidth}
          >
            {children}
          </ModalContent>
        </StyledMuiDialog>
      )}
    </React.Fragment>
  );
}
