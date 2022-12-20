import React from 'react';

export interface Props {
  color?: string;
}

export const ETHSymbolSmall: React.FunctionComponent<Props> = ({
  color = 'currentColor',
}: Props) => (
  <svg
    width="0.625em"
    height="1em"
    viewBox="0 0 20 32"
    style={{ verticalAlign: '-9%' }}
  >
    <path d="M10 0L20 16L10 22.2222L0 16L10 0Z" fill={color} />
    <path
      d="M0 17.7778L10 24.8889L20 17.7778L10 32L0 17.7778Z"
      fill={color}
      fillOpacity={0.9}
    />
  </svg>
);
