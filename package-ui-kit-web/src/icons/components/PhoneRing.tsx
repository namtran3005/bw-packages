import React from 'react';
import { SvgProps } from '../types';

export function PhoneRing(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M15.134 11.666a5.2 5.2 0 015.2 5.2m-5.2-9.533a9.533 9.533 0 019.533 9.533M15.134 3A13.866 13.866 0 0129 16.866M16.428 28.18l.011.008a5.2 5.2 0 006.471-.71l.727-.727a1.732 1.732 0 000-2.453l-3.065-3.063a1.735 1.735 0 00-2.452 0 1.733 1.733 0 01-2.451 0l-4.902-4.903a1.733 1.733 0 010-2.45 1.731 1.731 0 000-2.453L7.702 8.365a1.733 1.733 0 00-2.45 0l-.728.727a5.2 5.2 0 00-.71 6.47l.007.012A46.92 46.92 0 0016.428 28.18z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
