import React from 'react';
import { SvgProps } from '../types';

export function PhoneTransaction(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M18.6 20.333v5.2A3.466 3.466 0 0115.133 29H6.467A3.466 3.466 0 013 25.533V6.467A3.467 3.467 0 016.467 3h8.666A3.467 3.467 0 0118.6 6.467v1.726M3 23.8h15.6m-6.933-9.533h8.666m0 0L16.867 10.8m3.466 3.467l-3.466 3.466m6.933-3.466a2.6 2.6 0 105.2 0 2.6 2.6 0 00-5.2 0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
