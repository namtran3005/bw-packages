import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const VisibilityOnIcon: React.FunctionComponent<IconContentComponentProps> = Icon(
  {
    size: 24,
    icon: (
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <ellipse
          stroke="currentColor"
          strokeWidth="1"
          cx="11.7618147"
          cy="10.2525253"
          rx="5.00189036"
          ry="5.3030303"
        />
        <path
          d="M1.04348192,9.9506578 C1.0386843,9.64265514 5.75721911,4.44444444 11.6977343,4.44444444 C17.6382496,4.44444444 22.7094506,9.64265514 22.7142482,9.9506578 C22.7190458,10.2586605 17.9310148,15.7073848 11.8788652,15.5523079 C5.82671557,15.3972309 1.04827953,10.2586605 1.04348192,9.9506578 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse
          fill="currentColor"
          cx="11.7618147"
          cy="10.2525253"
          rx="2.1436673"
          ry="2.27272728"
        />
      </g>
    ),
  }
);

export default VisibilityOnIcon;
