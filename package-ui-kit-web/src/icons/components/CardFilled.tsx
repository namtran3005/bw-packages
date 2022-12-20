import React from 'react';
import { SvgProps } from '../types';

export function CardFilled(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M26.873 7H5.127A3.127 3.127 0 002 10.127V23.15c0 1.727 1.4 3.126 3.127 3.126h21.746c1.727 0 3.127-1.4 3.127-3.126V10.127C30 8.4 28.6 7 26.873 7z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M6.33 16.693h4.581M16.383 16.693h8.911M16.383 20.664h8.911"
        stroke="#fff"
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
      />
    </svg>
  );
}
