import React from 'react';

export interface Props {
  color?: string;
}

export const ETHSymbol: React.FunctionComponent<Props> = ({
  color = 'currentColor',
}: Props) => (
  <svg
    width="0.625em"
    height="1em"
    viewBox="0 0 20 32"
    fill="none"
    style={{ verticalAlign: '-9%' }}
  >
    <path
      opacity={0.6}
      d="M10.002 11.6568L0 16L10.002 21.3223L20 16L10.002 11.6568Z"
      fill={color}
    />
    <path opacity={0.45} d="M0 16L10 21.3217V0L0 16Z" fill={color} />
    <path opacity={0.8} d="M10 0V21.3217L20 16L10 0Z" fill={color} />
    <path opacity={0.45} d="M0 18L10 32V23.8711L0 18Z" fill={color} />
    <path opacity={0.8} d="M10 23.8711V32L20 18L10 23.8711Z" fill={color} />
  </svg>
);
