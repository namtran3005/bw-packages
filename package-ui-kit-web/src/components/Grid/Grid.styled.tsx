import * as React from 'react';
import styled from 'styled-components';
import { Grid as MuiGrid } from '@material-ui/core';
import { GridProps as MuiGridProps } from '@material-ui/core/Grid';

import { RootSpacingProps } from '../Content/Content.styled';

interface GridProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  fullHeight?: boolean;
  component?: React.ElementType;
  spacing?: 0 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64;
}

type RootProps = GridProps &
  Omit<MuiGridProps, 'ref' | 'spacing'> &
  RootSpacingProps;

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  fullHeight,
  spacing = 0,
  ...cleanProps
}) => (
  <MuiGrid spacing={(spacing / 8) as MuiGridProps['spacing']} {...cleanProps} />
);

const Root = styled(RootComponent)`
  min-height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  box-sizing: border-box;
`;

Root.displayName = 'Grid';
RootComponent.displayName = 'GridComponent';

export { Root, RootProps, RootComponent };
