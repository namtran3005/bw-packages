import React from 'react';
import { SvgProps } from '../types';

export function Utilities(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 28 32" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M27 29a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h14.172a2 2 0 011.413.585l7.83 7.83A2 2 0 0127 10.828V29z"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M27 11h-8a2 2 0 01-2-2V1M14 20h8M11 16a4 4 0 110-8M5 11h6M5 13h4.5M7 26h15"
      ></path>
    </svg>
  );
}
