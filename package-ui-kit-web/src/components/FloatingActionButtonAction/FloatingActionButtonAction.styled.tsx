import * as React from 'react';
import styled from 'styled-components';

import { Colors } from '@bitwala-cryptobank-squad/package-theme';
import { ButtonProps, Button } from '../Button';

interface RootProps extends ButtonProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const RootComponent: React.FunctionComponent<RootProps> = (props) => (
  <Button size="M" {...props} />
);

const Root = styled(RootComponent)`
  &&& {
    background: ${Colors.get('background')};
  }
`;

Root.displayName = 'FloatingActionButtonAction';
RootComponent.displayName = 'FloatingActionButtonActionComponent';

export { Root, RootProps, RootComponent };
