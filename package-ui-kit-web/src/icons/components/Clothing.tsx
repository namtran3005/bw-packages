import React from 'react';
import { SvgProps } from '../types';

export function Clothing(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M25 15V29C25 29 23 31 16 31C9 31 7 29 7 29V15"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00011 3L6.57611 4.03867C5.20179 4.62652 4.01964 5.58766 3.16371 6.81311C2.30778 8.03856 1.8123 9.47931 1.73345 10.972L1.05611 23.948C1.04886 24.0836 1.06933 24.2192 1.11626 24.3466C1.16319 24.474 1.2356 24.5904 1.32907 24.6889C1.42254 24.7874 1.5351 24.8657 1.65987 24.9192C1.78465 24.9727 1.91902 25.0002 2.05478 25H7.00011"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 25H29.9453C30.0811 25.0002 30.2155 24.9727 30.3402 24.9192C30.465 24.8657 30.5776 24.7874 30.671 24.6889C30.7645 24.5904 30.8369 24.474 30.8839 24.3466C30.9308 24.2192 30.9513 24.0836 30.944 23.948L30.2667 10.972C30.1883 9.47989 29.6936 8.03956 28.8386 6.81417C27.9837 5.58878 26.8027 4.6273 25.4293 4.03867L23 3"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 3C23 4.06087 22.5786 5.07828 21.8284 5.82843C21.0783 6.57857 20.0609 7 19 7H13C11.9391 7 10.9217 6.57857 10.1716 5.82843C9.42143 5.07828 9 4.06087 9 3C9 2.46957 9.21071 1.96086 9.58579 1.58579C9.96086 1.21071 10.4696 1 11 1H21C21.5304 1 22.0391 1.21071 22.4142 1.58579C22.7893 1.96086 23 2.46957 23 3Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7V11"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 7V15"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
