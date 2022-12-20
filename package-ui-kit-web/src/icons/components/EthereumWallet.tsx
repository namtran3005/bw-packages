import React from 'react';
import { SvgProps } from '../types';

export function EthereumWallet(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M2.893 8.114v-.8a.8.8 0 00-.8.8h.8zm26.107 0h.8a.8.8 0 00-.8-.8v.8zM29 29v.8a.8.8 0 00.8-.8H29zM2.893 29h-.8a.8.8 0 00.8.8V29zM24.719 8.114a.8.8 0 001.6 0h-1.6zm.8-3.267h-.8.8zm-1.94-1.73l.092.794-.092-.794zM5.975 5.146l-.092-.795.092.795zm-3.082 3.46h.8-.8zm-.8 1.249a.8.8 0 101.6 0h-1.6zM16 11l.677-.427a.8.8 0 00-1.354 0L16 11zm4.412 6.988l.42.681a.8.8 0 00.256-1.108l-.676.427zM16 20.706l-.42.681a.8.8 0 00.84 0l-.42-.681zm-4.412-2.718l-.676-.427a.8.8 0 00.257 1.108l.42-.68zm0 2.718L12 20.02a.8.8 0 00-1.026 1.198l.614-.512zM16 23.353l-.412.686a.8.8 0 00.824 0L16 23.353zm4.412-2.647l.614.512A.8.8 0 0020 20.02l.412.686zM16 26l-.615.512a.8.8 0 001.23 0L16 26zM2.893 8.914H29v-1.6H2.893v1.6zm25.307-.8V29h1.6V8.114h-1.6zM29 28.2H2.893v1.6H29v-1.6zM3.693 29V8.114h-1.6V29h1.6zM26.319 8.114V4.847h-1.6v3.267h1.6zm0-3.267c0-.358-.075-.712-.222-1.04l-1.46.654a.94.94 0 01.082.385l1.6.001zm-.222-1.04a2.54 2.54 0 00-.628-.857l-1.065 1.194a.94.94 0 01.233.317l1.46-.654zm-.628-.857a2.54 2.54 0 00-.924-.526l-.483 1.525a.94.94 0 01.342.195L25.47 2.95zm-.924-.526a2.54 2.54 0 00-1.058-.102l.184 1.59a.94.94 0 01.392.037l.482-1.525zm-1.058-.102L5.883 4.352l.183 1.589 17.605-2.03-.184-1.59zM5.883 4.352a4.281 4.281 0 00-2.706 1.405L4.372 6.82a2.681 2.681 0 011.694-.88l-.183-1.59zM3.177 5.756a4.281 4.281 0 00-1.084 2.85l1.6-.001c0-.658.241-1.294.679-1.785L3.177 5.757zm-1.084 2.85v1.248h1.6V8.606h-1.6zm13.23 2.82l4.412 6.988 1.353-.854-4.412-6.988-1.352.854zm4.67 5.88l-4.413 2.718.84 1.362 4.411-2.718-.839-1.362zm-3.573 2.718l-4.412-2.718-.84 1.362 4.412 2.718.84-1.362zm-4.155-1.61l4.412-6.988-1.354-.854-4.411 6.988 1.353.854zm-1.088 2.977l4.411 2.647.824-1.372L12 20.02l-.823 1.372zm5.235 2.647l4.411-2.647L20 20.02l-4.412 2.647.824 1.372zm3.385-3.845l-4.412 5.294 1.23 1.024 4.411-5.294-1.229-1.024zm-3.182 5.294l-4.412-5.294-1.23 1.024 4.412 5.294 1.23-1.024z"
        fill={props.color}
      />
    </svg>
  );
}
