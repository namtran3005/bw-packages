import React from 'react';
import { SvgProps } from '../types';

export function Technology(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 32 26" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M28 16V3a2 2 0 00-2-2H6a2 2 0 00-2 2v13h24zM30.828 22.188A2 2 0 0129 25H3a2 2 0 01-1.828-2.812L4 16h24l2.828 6.188zM14 21h4"
      ></path>
    </svg>
  );
}
