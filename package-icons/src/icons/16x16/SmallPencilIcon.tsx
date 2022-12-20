import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const SmallPencilIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 16,
    icon: (
      <React.Fragment>
        <path
          d="M2.5 10.5L2 14L5.5 13.5M2.5 10.5H5.5V13.5M2.5 10.5L10 3L13 6L5.5 13.5"
          stroke="currentColor"
        />
        <path
          d="M10 2.99999C10 2.99999 11.7815 0.781527 13.5 2.5C15.2185 4.21847 13 5.99999 13 5.99999"
          stroke="currentColor"
        />
      </React.Fragment>
    ),
  }
);

export default SmallPencilIcon;
