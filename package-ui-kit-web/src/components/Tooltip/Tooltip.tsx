import React from 'react';
import { Tooltip as MuiTooltip } from '@material-ui/core';
import { TooltipProps as MuiTooltipProps } from '@material-ui/core/Tooltip';

import { Typography } from '../Typography';

const Tooltip = React.forwardRef<HTMLDivElement, MuiTooltipProps>(
  ({ title, ...cleanProps }, ref) => {
    return (
      <MuiTooltip
        ref={ref}
        title={
          <Typography.Caption foreground="white">{title}</Typography.Caption>
        }
        {...cleanProps}
      />
    );
  }
);

export { Tooltip, MuiTooltipProps as TooltipProps };
