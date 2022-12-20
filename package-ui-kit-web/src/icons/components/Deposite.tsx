import React from 'react';
import { SvgProps } from '../types';

export function Deposite(props: SvgProps) {
  return (
    <svg fill="none" viewBox="0 0 32 28" {...props}>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M9.943 10.304l3.829-3.617c.429-.287.933-.44 1.45-.44h4.911a2.606 2.606 0 012.232 1.26l.467.77a2.61 2.61 0 01.101 2.523l-.422.845a2.606 2.606 0 01-2.844 1.39l-4.216-.842a.864.864 0 00-.651.134 2.582 2.582 0 00-1.145 2.414 1.005 1.005 0 00.637.839l7.132 2.743c.549.21 1.153.23 1.715.054L30.75 16"
      ></path>
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
        d="M30.75 5.695l-5.817-3.583a2.62 2.62 0 00-1.526-.379l-9.363.55a2.61 2.61 0 00-1.58.65L7.797 7.087c-.341.303-.597.69-.741 1.124l-.9 2.684M10.965 10.459a7.99 7.99 0 106.118 6.181M11 22a4 4 0 110-8M5 17h6M5.333 19h4"
      ></path>
    </svg>
  );
}
