import React from 'react';
import { SvgProps } from '../types';

export function Profile(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M20.365 29.275v-4.533l1.22.203a3.636 3.636 0 004.236-3.588v-2.98l1.133-.284a1.819 1.819 0 001.072-2.772l-2.205-3.309v-.91c0-5.365-5.43-9.65-11.903-9.045a10.904 10.904 0 00-4.464 20.304v6.91"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
