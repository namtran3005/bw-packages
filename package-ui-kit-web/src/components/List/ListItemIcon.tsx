import * as React from 'react';
import styled from 'styled-components';
import { Spacing } from '@bitwala-cryptobank-squad/package-theme';

interface RootProps {
  key?: number | string;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  key,
  ...cleanProps
}) => <div {...cleanProps} />;

const Root = styled(RootComponent)`
  color: inherit;
  margin-right: ${Spacing.unit * 2}px;

  & > * {
    vertical-align: middle;
  }
`;

Root.displayName = 'ListItemIcon';

export { Root, RootProps, RootComponent };

const ListItemIcon: React.FC<RootProps> = Root;

export { ListItemIcon, RootProps as ListItemIconProps };
