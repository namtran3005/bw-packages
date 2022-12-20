import React from 'react';
import { SvgProps } from '../types';

export function Tourism(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 28 32" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M2.667 12.647a10 10 0 1020 0 10 10 0 00-20 0zM22.567 2.748a14 14 0 11-19.8 19.799M23.98 1.333l-1.413 1.415M2.767 22.547L1.353 23.96M12.666 26.647v4M4.667 30.647h16"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M3.499 8.647h2.168a2 2 0 012 2v2.172a2 2 0 00.585 1.414l1.54 1.54a2 2 0 01.484 2.047l-.412 1.235a2 2 0 01-.697.966l-1.622 1.216M15.867 3.172c-.543.433-1.122.883-1.635 1.279a2 2 0 00-.38 2.784l1.215 1.612a2 2 0 001.6.8h1.172a2 2 0 011.413.586l1.54 1.54a2 2 0 001.867.534"
      ></path>
    </svg>
  );
}
