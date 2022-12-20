import * as React from 'react';

import styled from 'styled-components';
import { Divider as MuiDivider } from '@material-ui/core';
import { DividerProps as MuiDividerProps } from '@material-ui/core/Divider';

interface DividerProps extends MuiDividerProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const DividerComponent: React.FunctionComponent<DividerProps> = (props) => {
  return <MuiDivider {...props} />;
};

const Divider = styled(DividerComponent)`
  && {
    background-color: ${({ theme, ...props }) =>
      props.light
        ? theme.palette.get('backgroundLight')
        : theme.palette.getWithAlpha('primaryBlack', 0.25)};
  }
`;

export { Divider, DividerProps };
