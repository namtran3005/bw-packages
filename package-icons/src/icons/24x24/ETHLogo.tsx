import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const ETHLogo: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <React.Fragment>
      <path
        opacity="0.6"
        d="M12.0012 8.99405L6 11.6L12.0012 14.7934L18 11.6L12.0012 8.99405Z"
        fill="currentColor"
      />
      <path
        opacity="0.45"
        d="M6 11.6L12 14.793V2L6 11.6Z"
        fill="currentColor"
      />
      <path opacity="0.8" d="M12 2V14.793L18 11.6L12 2Z" fill="currentColor" />
      <path
        opacity="0.45"
        d="M6 12.8L12 21.2V16.3227L6 12.8Z"
        fill="currentColor"
      />
      <path
        opacity="0.8"
        d="M12 16.3227V21.2L18 12.8L12 16.3227Z"
        fill="currentColor"
      />
    </React.Fragment>
  ),
});

export default ETHLogo;
