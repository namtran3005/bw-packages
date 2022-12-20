import React from 'react';
import { SvgProps } from '../types';

export function Iban(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M13 31h17M15 21v10m4-10v10m5-10v10m4-10v10M7.65 28.463a15.004 15.004 0 1123.32-13.467M9.124 17.991a35.093 35.093 0 01.31-7.904 21.693 21.693 0 012.95-8.648M1.033 15H9M3.31 8h25.38M2.249 22H8M19.615 1.439a22.74 22.74 0 013.082 9.6M31 21H12l8.767-5.761a1.244 1.244 0 011.466 0L31 21z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
