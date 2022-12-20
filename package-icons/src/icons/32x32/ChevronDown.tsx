import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const ChevronDown: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 32,
  icon: (
    <React.Fragment>
      <path
        d="M0.999999 1.38602L14.3404 14.7265C14.427 14.8132 14.5298 14.8819 14.643 14.9289C14.7562 14.9758 14.8775 14.9999 15 14.9999C15.1225 14.9999 15.2438 14.9758 15.357 14.9289C15.4702 14.8819 15.573 14.8132 15.6596 14.7265L29 1.38602"
        stroke="#2C232E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </React.Fragment>
  ),
});

export default ChevronDown;
