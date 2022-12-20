import React from 'react';
import { SvgProps } from '../types';

export function TransactionItem(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect width={32} height={32} rx={16} fill="#fff" />
      <path d="M14 15a1 1 0 100 2h4a1 1 0 100-2h-4z" fill={props.color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 13h1v10a2 2 0 002 2h14a2 2 0 002-2V13h1V9a2 2 0 00-2-2H8a2 2 0 00-2 2v4zm18-4H8v2h16V9zM9 13h14v10H9V13z"
        fill={props.color}
      />
    </svg>
  );
}
