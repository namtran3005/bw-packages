import React from 'react';
import { SvgProps } from '../types';

export function TickIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M7 14.223L9.45 17.7C9.54293 17.8388 9.66768 17.9534 9.81385 18.0343C9.96002 18.1152 10.1234 18.16 10.2904 18.165C10.4573 18.17 10.6231 18.135 10.7738 18.063C10.9246 17.991 11.0559 17.884 11.157 17.751L19 7.82799M1.75 12.999Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
