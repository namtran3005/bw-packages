import React from 'react';
import { SvgProps } from '../types';

export function TransferVertical(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M19.5 17.733V3m0 0L16 6.467M19.5 3L23 6.467m-10.5 7.8V29m0 0l3.5-3.467M12.5 29L9 25.533"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
