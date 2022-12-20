import React from 'react';
import { SvgProps } from '../types';

export function BitcoinWallet2(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M21.597 23.376h2.643a3.838 3.838 0 003.89-3.763v-4.569M4.876 7.81l13.52 3.841a4.654 4.654 0 013.201 4.316v11.127a2.533 2.533 0 01-3.21 2.676L7.211 26.731A4.569 4.569 0 014 22.462V10.177a3.399 3.399 0 013.296-3.472h11.57m6.346-3.23V2m0 11.805v-1.476m-11.025 9.195a1.852 1.852 0 103.704 0 1.852 1.852 0 00-3.704 0zm11.763-9.195a2.213 2.213 0 000-4.427 2.213 2.213 0 000-4.426H23v8.853h2.951z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
