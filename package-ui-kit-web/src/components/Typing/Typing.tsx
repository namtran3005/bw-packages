import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ColorsType, Colors } from '@bitwala-cryptobank-squad/package-theme';

export interface Props {
  color?: ColorsType;
  size?: number;
}

export const Typing: React.FC<Props> = ({
  color = Colors.get('text'),
  size = 8,
}) => {
  const translate = keyframes`
        0%, 60%, 100% { transform: initial; }
        30% { transform: translateY(-${size}px); }
    `;

  const Span = styled.span`
    margin-right: ${size}px;
    .dot {
      display: inline-block;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      margin-right: 3px;
      margin-bottom: ${size}px;
      background: ${color};
      animation: ${translate} 1.3s linear infinite;

      &:nth-child(2) {
        animation-delay: -1.1s;
      }

      &:nth-child(3) {
        animation-delay: -0.9s;
      }
    }
  `;

  return (
    <Span style={{ display: 'flex', alignItems: 'center' }}>
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </Span>
  );
};
