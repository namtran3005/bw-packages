import React from 'react';
import { SvgProps } from '../types';

export function Entertainment(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M31 29C31 29.5304 30.7893 30.0391 30.4142 30.4142C30.0391 30.7893 29.5304 31 29 31H3C2.46957 31 1.96086 30.7893 1.58579 30.4142C1.21071 30.0391 1 29.5304 1 29C1 28.4696 1.21071 27.9609 1.58579 27.5858C1.96086 27.2107 2.46957 27 3 27H29C29.5304 27 30.0391 27.2107 30.4142 27.5858C30.7893 27.9609 31 28.4696 31 29Z"
        stroke="#2C232E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 27V21C3 19.9391 3.42143 18.9217 4.17157 18.1716C4.92172 17.4214 5.93913 17 7 17H9L12 22H21V17L23.6333 18.3173C25.246 19.1234 26.6022 20.3627 27.5501 21.8963C28.498 23.4299 29.0001 25.1971 29 27"
        stroke="#2C232E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17V1L1 8H7"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 22L17 18"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
