import React from 'react';
import { SvgProps } from '../types';

export function BTC(props: SvgProps) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.3086 11.8671C13.2651 11.8671 14.1824 12.2471 14.8587 12.9234C15.535 13.5998 15.915 14.5171 15.915 15.4736C15.915 16.43 15.535 17.3474 14.8587 18.0237C14.1824 18.7 13.2651 19.08 12.3086 19.08H7.5V4.65428H12.3086C13.2651 4.65428 14.1824 5.03424 14.8587 5.71058C15.535 6.38691 15.915 7.30422 15.915 8.26071C15.915 9.21719 15.535 10.1345 14.8587 10.8108C14.1824 11.4872 13.2651 11.8671 12.3086 11.8671ZM12.3086 11.8671L7.5 11.8671M11.1064 4.65429V2.25M11.1064 21.4843V19.08"
        stroke={props.color}
        strokeWidth={props.strokeWidth || 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
