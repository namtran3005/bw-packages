import * as React from 'react';
import styled from 'styled-components';

import {
  MediaStyledProperty,
  mediaStyledProperties,
} from '../../utils/mediaStyledProperty';

interface RootProps {
  inline?: boolean;
  rowsTemplate?: MediaStyledProperty<React.CSSProperties['gridTemplateRows']>;
  columnsTemplate?: MediaStyledProperty<
    React.CSSProperties['gridTemplateColumns']
  >;
  autoRows?: MediaStyledProperty<React.CSSProperties['gridAutoRows']>;
  autoColumns?: MediaStyledProperty<React.CSSProperties['gridAutoColumns']>;
  autoFlow?: MediaStyledProperty<React.CSSProperties['gridAutoFlow']>;
  template?: MediaStyledProperty<React.CSSProperties['gridTemplate']>;
  templateAreas?: MediaStyledProperty<React.CSSProperties['gridTemplateAreas']>;
  columnGap?: MediaStyledProperty<React.CSSProperties['gridColumnGap']>;
  rowGap?: MediaStyledProperty<React.CSSProperties['gridRowGap']>;
  justifyItems?: MediaStyledProperty<React.CSSProperties['justifyItems']>;
  alignItems?: MediaStyledProperty<React.CSSProperties['alignItems']>;
  justifyContent?: MediaStyledProperty<React.CSSProperties['justifyContent']>;
  alignContent?: MediaStyledProperty<React.CSSProperties['alignContent']>;
  fullHeight?: boolean;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  inline,
  rowsTemplate,
  columnsTemplate,
  autoColumns,
  autoRows,
  autoFlow,
  template,
  templateAreas,
  columnGap,
  rowGap,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  fullHeight,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <div {...cleanProps} />;

const getPxValue = (value?: number | string) => {
  return typeof value === 'number' ? `${value}px` : value;
};

const Root = styled(RootComponent)`
  box-sizing: border-box;
  display: ${({ inline }) => (!inline ? 'grid' : 'inline-grid')};
  min-height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  width: ${({ inline }) => (inline ? 'auto' : '100%')};

  ${(props) =>
    mediaStyledProperties({
      'grid-template-rows': props.rowsTemplate,
      'grid-template-columns': props.columnsTemplate,
      'grid-auto-rows': props.autoRows,
      'grid-auto-columns': props.autoColumns,
      'grid-auto-flow': props.autoFlow,
      'grid-template': props.template,
      'grid-template-areas': props.templateAreas,
      'row-gap': {
        value: props.rowGap,
        transform: getPxValue,
      },
      'grid-row-gap': {
        value: props.rowGap,
        transform: getPxValue,
      },
      'column-gap': {
        value: props.columnGap,
        transform: getPxValue,
      },
      'grid-column-gap': {
        value: props.columnGap,
        transform: getPxValue,
      },
      'justify-items': props.justifyItems,
      'align-items': props.alignItems,
      'justify-content': props.justifyContent,
      'align-content': props.alignContent,
    })};

  > * {
    min-width: 0;
  }
`;

Root.displayName = 'Grid';
RootComponent.displayName = 'GridComponent';

export { Root, RootProps, RootComponent };
