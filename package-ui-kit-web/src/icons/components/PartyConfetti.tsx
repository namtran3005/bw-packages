import React from 'react';
import { SvgProps } from '../types';

export function PartyConfetti(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M12.898 19.1c1.313 1.313 2.833 2.311 4.225 2.775 1.392.465 2.543.357 3.2-.3.656-.656.764-1.807.3-3.2-.464-1.392-1.462-2.912-2.775-4.224-1.313-1.313-2.833-2.311-4.225-2.776-1.392-.464-2.543-.356-3.2.3-.656.657-.764 1.808-.3 3.2.464 1.393 1.462 2.913 2.775 4.225v0z"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M9.866 12.933L1.183 28.161a2 2 0 002.655 2.655l15.228-8.676M21.03 10.266a.5.5 0 010 .708M20.324 10.267a.5.5 0 01.706 0M20.324 10.969a.503.503 0 010-.708M21.03 10.97a.5.5 0 01-.706 0M26.687 4.605a.5.5 0 010 .707M25.98 4.606a.498.498 0 01.708 0M25.981 5.312a.498.498 0 010-.707M26.688 5.311a.5.5 0 01-.707 0M26.687 18.747a.499.499 0 010 .708M25.98 18.747a.5.5 0 01.708 0M25.981 19.455a.5.5 0 010-.708M26.688 19.455a.5.5 0 01-.707 0M11.131 6.02a.503.503 0 010 .707M10.425 6.019a.5.5 0 01.707 0M10.425 6.727a.5.5 0 010-.708M11.132 6.727a.5.5 0 01-.707 0M17.142 1c.282 2.52.04 5.07-.708 7.493M22.092 2.837l-.707 3.535M30.999 14.857a18.45 18.45 0 00-7.493.708M29.162 9.908l-3.535.707"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
