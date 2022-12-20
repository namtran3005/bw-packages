import React from 'react';
import { SvgProps } from '../types';

export function BankTransfer(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M27 7l-7.708-6v3H8.471a4.472 4.472 0 00-4.322 5.617 4.47 4.47 0 001.842 2.572L8.708 14v-2a2 2 0 012-2h8.584v3L27 7zM4.708 25L13 31v-3h10.533a4.47 4.47 0 002.482-8.188L23.292 18v2a2 2 0 01-2 2H13v-3l-8.292 6z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
