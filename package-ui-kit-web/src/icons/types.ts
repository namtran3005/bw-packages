import { ColorsType } from '@bitwala-cryptobank-squad/package-theme';
import { FC } from 'react';

export interface SvgProps {
  color: string;
  height: number;
  width: number;
  strokeWidth: number;
  className?: string;
}

export type IconSize = 'XS' | 'S' | 'M' | 'L';

export interface IconComponentProps {
  size?: IconSize;
  foreground?: ColorsType;
  className?: string;
}

export type SvgIconType = FC<SvgProps>;

export type Icon = FC<IconComponentProps>;
