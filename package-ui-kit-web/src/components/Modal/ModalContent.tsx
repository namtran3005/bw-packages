import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Spacing } from '@bitwala-cryptobank-squad/package-theme';
import {
  Root as StyledContent,
  RootProps as ContentProps,
  RootContent as StyledContentContent,
} from '../Content/Content.styled';
import ModalHeader from './ModalHeader';
import { ModalProps } from './types';

interface ModalContentProps extends ContentProps {
  verticalAlign?: string;
  docked?: string;
  onClose?: ModalProps['onClose'];
  title?: ReactNode;
  rightHeaderElement?: ModalProps['rightHeaderElement'];
  showDismissButton?: boolean;
  doNotRestrictTitleWidth?: ModalProps['doNotRestrictTitleWidth'];
}

// TODO: when migrating the content component, just add
//       support for ref access and this can be removed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Content: React.ForwardRefExoticComponent<any> = React.forwardRef(
  function Content(props: ContentProps, ref) {
    const { children, ...cleanProps } = props;
    return (
      <StyledContent ref={ref} {...cleanProps}>
        <StyledContentContent>{children}</StyledContentContent>
      </StyledContent>
    );
  }
);

const StyledModalContent = styled(Content).withConfig({
  shouldForwardProp: (prop) =>
    !['docked', 'title', 'rightHeaderElement'].includes(prop.toString()),
})`
  && {
    height: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0;
    text-align: center;
    & > div {
      position: relative;
      display: flex;
      flex-direction: column;
      padding-top: 0;
      min-height: calc(100% - ${Spacing.base}px);
      box-sizing: content-box;
    }
  }
  & .MuiGrid-container {
    width: 100%;
    margin: 0;
  }

  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
  }
`;

const ModalContent: React.ForwardRefExoticComponent<ModalContentProps> = React.forwardRef(
  (props, ref) => {
    const {
      children,
      showDismissButton,
      doNotRestrictTitleWidth,
      ...cleanProps
    } = props;
    return (
      <StyledModalContent ref={ref} spacing={24} {...cleanProps}>
        <ModalHeader
          title={props.title}
          onClose={props.onClose}
          rightHeaderElement={props.rightHeaderElement}
          showDismissButton={showDismissButton}
          doNotRestrictTitleWidth={doNotRestrictTitleWidth}
        />
        {children}
      </StyledModalContent>
    );
  }
);

export { ModalContent, ModalContentProps };
