import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  fullWidth?: boolean;
  align?: React.CSSProperties['textAlign'];
  style?: React.CSSProperties;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  fullWidth,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  align,
  ...cleanProps
}) => <div {...cleanProps} />;

const Root = styled(RootComponent)`
  display: ${(props) => (props.fullWidth ? 'flex' : 'block')};
  text-align: ${(props) => (props.align ? props.align : 'initial')};

  & > * {
    flex: 1;
    margin-right: 8px !important;

    &:last-child {
      margin-right: 0 !important;
    }
  }
`;

Root.displayName = 'ButtonGroup';
RootComponent.displayName = 'ButtonGroupComponent';

export { Root, RootProps, RootComponent };
