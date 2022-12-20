import React from 'react';
import { SvgProps } from '../types';

export function HouseHold(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 32 32" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M1 1h30v6H1V1zM1 19h30v12H1V19zM11 1v6M21 1v6M1 23h30M11 23v8M21 23v8"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M16 14a5 5 0 11-10 0h10zM27 19h-4l-1-5h6l-1 5z"
      ></path>
    </svg>
  );
}
