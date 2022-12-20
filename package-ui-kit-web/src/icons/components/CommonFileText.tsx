import React from 'react';
import { SvgProps } from '../types';

export function CommonFileText(props: SvgProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M24.3621 23.2505C24.3621 23.6674 24.1964 24.0673 23.9016 24.3621C23.6068 24.657 23.2069 24.8226 22.7899 24.8226H3.92432C3.50737 24.8226 3.10749 24.657 2.81266 24.3621C2.51782 24.0673 2.35219 23.6674 2.35219 23.2505V2.8127C2.35219 2.39574 2.51782 1.99586 2.81266 1.70103C3.10749 1.4062 3.50737 1.24056 3.92432 1.24056H19.6928C20.1032 1.24033 20.4974 1.40057 20.7912 1.68705L23.8873 4.70869C24.0376 4.85515 24.157 5.03019 24.2385 5.22351C24.32 5.41684 24.3621 5.62453 24.3621 5.83434V23.2505Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.11577 9.10124H19.6929"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.11577 13.8176H19.6929"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.11577 18.5341H13.4043"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
