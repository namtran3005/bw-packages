import React from 'react';
import { SvgProps } from '../types';

export function Nuri(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M8.2 20.806H3.996v4.453h4.202c1.581 0 2.621-.75 2.621-2.206s-1.04-2.247-2.62-2.247zM30 8.073c0 3.287-2.496 5.035-5.325 5.035-2.83 0-5.326-1.748-5.326-5.035V.042h1.914v7.99c0 2.121 1.456 3.328 3.412 3.328 1.955 0 3.411-1.207 3.411-3.329V.041H30v8.032zm-17.141 4.744h-1.997L3.997 2.58v10.237H2.083V0h2.58l6.324 9.57V0H12.9v12.817h-.041zM2.042 19.1h6.49c2.621 0 4.244 1.665 4.244 3.995 0 1.997-1.29 3.412-3.37 3.787l3.328 5.035h-2.247l-3.162-4.91h-3.37v4.91H2V19.1h.042zm17.89 0h9.652v1.956h-3.828v8.988h3.828V32h-9.652v-1.956h3.827v-8.988h-3.827V19.1z"
        fill={props.color}
      />
    </svg>
  );
}
