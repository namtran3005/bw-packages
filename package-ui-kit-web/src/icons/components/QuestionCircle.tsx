import React from 'react';
import { SvgProps } from '../types';

export function QuestionCircle(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M12.533 12.533a3.467 3.467 0 114.623 3.27A1.734 1.734 0 0016 17.436V18.6"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M16 22.067a.434.434 0 100 .867.434.434 0 000-.867z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M3 16a13 13 0 1026 0 13 13 0 00-26 0v0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
      />
    </svg>
  );
}
