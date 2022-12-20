import React from 'react';
import { SvgProps } from '../types';

export function ViewIban(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M3.5 13v8M7 13v8M7 13c.474 0 2.48-.767 3.748.5 1.267 1.267.252 2.61 0 2.776-.589.387-.918.46-1.606.59M7 21c2.5 0 3.293.207 4-.5.858-.858 1-3.634-2-3.5m0 0H7.5c.65 0 1.192-.048 1.642-.134M9 17l.142-.134M19.5 19h-4M17.5 13l-3 8M17.5 13l3 8M23.5 13v8M28.5 13v8M23.5 13l5 8"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
