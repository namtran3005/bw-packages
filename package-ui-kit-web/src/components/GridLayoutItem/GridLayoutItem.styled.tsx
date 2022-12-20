import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  columnStart?: React.CSSProperties['gridColumnStart'];
  rowStart?: React.CSSProperties['gridRowStart'];
  columnEnd?: React.CSSProperties['gridColumnEnd'];
  rowEnd?: React.CSSProperties['gridRowEnd'];
  column?: React.CSSProperties['gridColumn'];
  area?: React.CSSProperties['gridArea'];
  justifySelf?: React.CSSProperties['justifySelf'];
  alignSelf?: React.CSSProperties['alignSelf'];
  position?: React.CSSProperties['position'];
  zIndex?: React.CSSProperties['zIndex'];
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  columnStart,
  rowStart,
  columnEnd,
  rowEnd,
  column,
  area,
  justifySelf,
  alignSelf,
  position,
  zIndex,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <div {...cleanProps} />;

const Root = styled(RootComponent)`
  position: ${({ position }) => (position ? position : 'relative')};
  z-index: ${({ zIndex }) => (zIndex !== undefined ? zIndex : 1)};
  min-width: 0;
  grid-column-start: ${({ columnStart }) => columnStart};
  grid-row-start: ${({ rowStart }) => rowStart};
  grid-column-end: ${({ columnEnd }) => columnEnd};
  grid-row-end: ${({ rowEnd }) => rowEnd};
  grid-column: ${({ column }) => column};
  grid-area: ${({ area }) => area};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
`;

Root.displayName = 'GridItem';
RootComponent.displayName = 'GridItemComponent';

export { Root, RootProps, RootComponent };
