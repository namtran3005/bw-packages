import * as React from 'react';
import styled from 'styled-components';
import { ColorsType } from '@bitwala-cryptobank-squad/package-theme';
import { Paper, PaperProps } from '../Paper';
import { Typography, TypographyProps } from '../Typography';

interface RootProps extends PaperProps {
  foreground?: ColorsType;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  ...cleanProps
}) => <Paper {...cleanProps} />;

const RootLabelComponent: React.FunctionComponent<TypographyProps> = ({
  ...cleanProps
}) => <Typography.Body fontWeight={700} {...cleanProps} />;

const RootLabel = styled(RootLabelComponent)``;

const Root = styled(RootComponent)`
  &&& {
    padding: 4px 6px 3.5px;
    display: block;
    margin: 4px 0;
  }
`;

Root.displayName = 'TextFieldBlockAdornment';
RootComponent.displayName = 'TextFieldBlockAdornmentCompoment';

export { Root, RootProps, RootComponent, RootLabel, RootLabelComponent };
