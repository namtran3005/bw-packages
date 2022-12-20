import React from 'react';
import { SvgProps } from '../types';

export function CreditCardOnlinePayment(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M29 14.5v-11a2 2 0 00-2-2H3a2 2 0 00-2 2v21a2 2 0 002 2h8M1 7.5h28"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M5.772 19.958a2.967 2.967 0 002.479 1.167c1.517 0 2.749-.924 2.749-2.063 0-1.138-1.232-2.061-2.75-2.061-1.517 0-2.75-.924-2.75-2.068 0-1.144 1.232-2.063 2.75-2.063a2.965 2.965 0 012.478 1.167M8.25 21.126V22.5M8.25 11.5v1.375M15 18.5h16v12H15v-12zM15 22.5h16M27 26.5h-2"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
