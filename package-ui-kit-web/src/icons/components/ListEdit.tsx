import React from 'react';
import { SvgProps } from '../types';

export function ListEdit(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M11.681 29H4.748a1.733 1.733 0 01-1.733-1.733V4.733A1.733 1.733 0 014.748 3H17.03c.46 0 .9.183 1.225.507l6.786 6.786c.325.325.507.765.507 1.225v.149h-6.933a1.733 1.733 0 01-1.734-1.734V3m-5.293 10.236L9.124 16.52a.865.865 0 01-1.306.093l-1.337-1.336m5.107 5.759L9.124 24.32a.865.865 0 01-1.306.093l-1.337-1.337m8.667-6.21h4.333m8.818 2.45l-8.818 8.817-4.333.867.867-4.333 8.818-8.818a2.444 2.444 0 013.456 0l.01.01a2.444 2.444 0 010 3.456z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
