import React from 'react';
import { SvgProps } from '../types';

export function Gift(props: SvgProps) {
  return (
    <svg {...props} fill="none" viewBox="0 0 30 30">
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M27.133 14.067H2.867v13.066A1.866 1.866 0 004.733 29h20.534a1.867 1.867 0 001.866-1.867V14.067zM27.133 8.467H2.867A1.867 1.867 0 001 10.333v2.8a.933.933 0 00.933.934h26.134a.933.933 0 00.933-.934v-2.8a1.867 1.867 0 00-1.867-1.866z"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M14.067 8.467c-4.124 0-8.4-3.343-8.4-7.467zM5.667 1c4.124 0 8.4 3.343 8.4 7.467zM15.933 8.467c4.124 0 8.4-3.343 8.4-7.467zM24.333 1c-4.124 0-8.4 3.343-8.4 7.467zM12.2 8.467h5.6V29h-5.6V8.467z"
      ></path>
    </svg>
  );
}
