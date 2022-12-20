import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const TickIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <polyline
      points="20 6 9 17 4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
});

export default TickIcon;
