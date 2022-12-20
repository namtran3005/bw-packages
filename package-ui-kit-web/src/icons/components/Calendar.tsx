import React from 'react';
import { SvgProps } from '../types';

export function Calendar(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.2 5a.8.8 0 01.8-.8h30a.8.8 0 01.8.8v26a.8.8 0 01-.8.8H1a.8.8 0 01-.8-.8V5zm1.6.8v24.4h28.4V5.8H1.8z"
        fill={props.color}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M1 13h30M9 8V1M23 8V1"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M7.5 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7.5 24a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16 24a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM24.5 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM24.5 24a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill={props.color}
      />
    </svg>
  );
}
