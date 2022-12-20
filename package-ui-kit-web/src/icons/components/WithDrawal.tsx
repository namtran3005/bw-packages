import React from 'react';
import { SvgProps } from '../types';

export function WithDrawal(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 32 30" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M24.839 25H7.16a1 1 0 01-.99-1.148L9 5h14l2.828 18.852a1 1 0 01-.99 1.148v0zM6 29h20M18.667 19a4 4 0 010-8M12.667 14h6M13 16h4"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M4 11H2a1 1 0 01-1-1V2a1 1 0 011-1h28a1 1 0 011 1v8a1 1 0 01-1 1h-2"
      ></path>
    </svg>
  );
}
