import React from 'react';
import { SvgProps } from '../types';

export function Airlines(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 24" fill="none" {...props}>
      <path
        d="M27.3413 6.99998L6.98665 7.02931L5.51998 4.09598L2.46265 3.96265C2.2213 3.96403 1.98403 4.02495 1.77187 4.14001C1.55972 4.25506 1.37923 4.42069 1.24642 4.62221C1.11361 4.82373 1.03259 5.05491 1.01053 5.29525C0.988476 5.53559 1.02607 5.77765 1.11998 5.99998L3.87598 12.224C4.10193 12.7502 4.47699 13.1988 4.95489 13.5144C5.43279 13.83 5.99261 13.9988 6.56531 14H11.9533L8.64131 20.8906C8.52794 21.1115 8.47324 21.3577 8.48247 21.6058C8.49169 21.8539 8.56453 22.0954 8.69399 22.3072C8.82345 22.519 9.00519 22.6939 9.22175 22.8152C9.43831 22.9366 9.68242 23.0002 9.93065 23H12.7306C12.9451 22.9997 13.1569 22.9524 13.3511 22.8614C13.5453 22.7704 13.7172 22.6379 13.8546 22.4733L20.7333 14H27.3413C27.8105 14.023 28.2795 13.951 28.7202 13.7883C29.1609 13.6256 29.5641 13.3755 29.9058 13.0532C30.2475 12.7308 30.5205 12.3427 30.7086 11.9122C30.8966 11.4817 30.9957 11.0177 31 10.548C30.9978 10.0733 30.9009 9.60378 30.7149 9.16703C30.5289 8.73029 30.2575 8.33508 29.9167 8.00461C29.576 7.67413 29.1726 7.41504 28.7304 7.24252C28.2881 7.07001 27.8159 6.98755 27.3413 6.99998Z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9599 6.94533L16.9706 1.58533C16.8341 1.40378 16.6573 1.25641 16.4541 1.15484C16.251 1.05326 16.027 1.00026 15.7999 1H13.0425C12.7933 1.00075 12.5483 1.06502 12.3308 1.18673C12.1133 1.30844 11.9304 1.48359 11.7993 1.69562C11.6683 1.90765 11.5935 2.14959 11.5819 2.39857C11.5703 2.64756 11.6224 2.89539 11.7332 3.11867L13.6519 7"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
