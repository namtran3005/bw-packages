import React from 'react';
import { SvgProps } from '../types';

export function CalendarCash(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M25 19h-2.71a1.79 1.79 0 00-.667 3.45l2.752 1.1A1.79 1.79 0 0123.71 27H21M23 19v-1M23 28v-1"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M15 23a8 8 0 1016.001 0A8 8 0 0015 23zM11 23H3a2 2 0 01-2-2V5.02a2 2 0 012-2h18a2 2 0 012 2V11"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M1 9h22"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.99 5V1M16.99 5V1"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
