import * as React from 'react';
import { ColorsType } from '@bitwala-cryptobank-squad/package-theme';

import { TypographyProps, Typography } from '../Typography';
import { Root, RootProps } from './Badge.styled';

interface BadgeProps extends RootProps {
  foreground?: ColorsType;
  textAlign?: TypographyProps['textAlign'];
}

const Badge: React.FunctionComponent<BadgeProps> = ({
  children,
  foreground,
  textAlign,
  ...cleanProps
}) => (
  <Root {...cleanProps}>
    <span>
      <Typography.Caption
        textAlign={textAlign || 'center'}
        {...(foreground && { foreground })}
      >
        {children}
      </Typography.Caption>
    </span>
  </Root>
);

export { Badge, BadgeProps };
