import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

export const ETHSimpleLogo: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 24,
    icon: (
      <React.Fragment>
        <path
          d="M6 12.5057L12 2L18 12.5057L12 16L6 12.5057Z"
          fill="currentColor"
        />
        <path d="M6 14L12 17.3549L18 14L12 22L6 14Z" fill="currentColor" />
      </React.Fragment>
    ),
  }
);
