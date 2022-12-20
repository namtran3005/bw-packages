import React from 'react';

export type SizeType = 12 | 16 | 24 | 32 | 48 | 56 | 96 | 100 | 144 | 192;

export interface IconGeneratorOptions {
  icon?: React.ReactElement<React.ReactFragment>;
  size: SizeType;
  IconContentComponent?: React.StatelessComponent<IconContentComponentProps>;
}

export interface IconContentComponentProps {
  textContent?: string | number;
  size?: SizeType;
  color?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const Icon = ({
  size,
  icon,
  IconContentComponent,
}: IconGeneratorOptions): React.FunctionComponent<IconContentComponentProps> => {
  return props => {
    const viewBoxSize = size;
    const svgSize = props.size || viewBoxSize;

    return (
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={`${svgSize}px`}
        height={`${svgSize}px`}
        style={{ color: props.color }}
        fill="none"
      >
        {IconContentComponent !== undefined ? (
          <IconContentComponent {...props} />
        ) : (
          icon
        )}
      </svg>
    );
  };
};
