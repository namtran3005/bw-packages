import React from 'react';
import { SvgProps } from '../types';

export function QRScan(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M8.2 16.867h6.933V18.6m3.467 0v5.2h5.2v-5.2h-1.733m-6.934 3.467V23.8m0-15.6v5.2h1.733m3.467 1.733H23.8M3 9.067V4.733A1.733 1.733 0 014.733 3h4.334m13.866 0h4.334A1.734 1.734 0 0129 4.733v4.334m0 13.866v4.334A1.734 1.734 0 0127.267 29h-4.334M9.067 29H4.733A1.734 1.734 0 013 27.267v-4.334M8.2 8.2h3.467v3.467H8.2V8.2zm0 12.133h3.467V23.8H8.2v-3.467zM20.333 8.2H23.8v3.467h-3.467V8.2z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
