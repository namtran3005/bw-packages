import React from 'react';
import { SvgProps } from '../types';

export function Facebook(props: SvgProps) {
  return (
    <svg viewBox="0 0 36 36" fill="none" {...props}>
      <path
        d="M22.2232 15.0725H19.1305V13.6957C19.1167 13.5932 19.1257 13.489 19.1568 13.3904C19.1878 13.2918 19.2402 13.2012 19.3102 13.1251C19.3802 13.0491 19.4661 12.9893 19.5618 12.9502C19.6574 12.911 19.7606 12.8934 19.8638 12.8986C20.1667 12.8986 22.029 12.9058 22.029 12.9058V10H18.8921C16.0464 10 15.5073 12.1551 15.5073 13.5181V15.0725H13.3334V17.971H15.5073V26.6667H19.1305V17.971H21.9211L22.2232 15.0725Z"
        stroke={props.color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="18" r="16.8" stroke={props.color} strokeWidth="1.6" />
    </svg>
  );
}
