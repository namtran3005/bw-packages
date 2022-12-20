import React from 'react';
import { Icon, IconContentComponentProps } from '../../Icon';

const CopyIcon: React.FunctionComponent<IconContentComponentProps> = Icon({
  size: 24,
  icon: (
    <React.Fragment>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0C0.447754 0 0 0.447754 0 1V11C0 11.5522 0.447754 12 1 12H11C11.5522 12 12 11.5522 12 11V1C12 0.447754 11.5522 0 11 0H1ZM10 2H2V10H10V2Z"
        transform="translate(4 8)"
        fill="currentColor"
      />
      <path
        d="M0 1V0H10V10H9"
        transform="translate(9 5)"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </React.Fragment>
  ),
});

export default CopyIcon;
