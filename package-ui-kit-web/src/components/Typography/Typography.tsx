import * as React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';

// disable deprecated typography variants
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

interface StyledTypographyProps extends TypographyProps {
  component?: React.ElementType;
  generic?: boolean;
  foreground?: ColorsType;
  foregroundAlpha?: number;
  textAlign?: React.CSSProperties['textAlign'];
  fontWeight?: React.CSSProperties['fontWeight'];
  wordBreak?: React.CSSProperties['wordBreak'];
  whiteSpace?: React.CSSProperties['whiteSpace'];
  fontStyle?: React.CSSProperties['fontStyle'];
  textDecoration?: React.CSSProperties['textDecoration'];
  copyable?: boolean;
}

const defaultForeground = 'text';

const getTypographyColor = (props: StyledTypographyProps) => {
  if (props.foreground) {
    if (props.foregroundAlpha) {
      return Colors.getWithAlpha(props.foreground, props.foregroundAlpha);
    }
    return Colors.get(props.foreground);
  }
  return Colors.get(defaultForeground);
};

export type TypographyType =
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'body2'
  | 'body1'
  | 'caption'
  | 'overline';

const generateTypographyComponent = (
  name: TypographyProps['variant']
): React.FunctionComponent<StyledTypographyProps> => {
  return ({
    /* These variables should not be passed down to the Material UI Component*/
    /* eslint-disable @typescript-eslint/no-unused-vars */
    generic,
    foreground,
    foregroundAlpha,
    textAlign,
    fontWeight,
    wordBreak,
    copyable,
    fontStyle,
    /* eslint-enable @typescript-eslint/no-unused-vars */
    ...cleanProps
  }) => <Typography variant={name} {...cleanProps} />;
};

const Header1Component = generateTypographyComponent('h1');
const Header2Component = generateTypographyComponent('h2');
const Header3Component = generateTypographyComponent('h3');
const Header4Component = generateTypographyComponent('h4');
const SubtitleComponent = generateTypographyComponent('subtitle1');
const BodyComponent = generateTypographyComponent('body1');
const SmallBodyComponent = generateTypographyComponent('body2');
const ButtonComponent = generateTypographyComponent('button');

const getTextAlign = css`
  ${(props: StyledTypographyProps) =>
    props.textAlign
      ? `&&& {text-align: ${props.textAlign};}`
      : `text-align: left;`};
`;

const generateCommonStyles = (props: StyledTypographyProps) => {
  return css`
    color: ${getTypographyColor(props)};
    font-family: ${props.generic ? 'inherit' : 'Inter'};
    font-style: ${props.fontStyle || 'normal'};
    white-space: ${props.whiteSpace ? props.whiteSpace : 'inherit'};
    ${props.generic
      ? 'font-weight: inherit'
      : props.fontWeight && `font-weight: ${props.fontWeight}`};
    ${props.wordBreak && `word-break: ${props.wordBreak};`};
    text-decoration: ${props.textDecoration ? props.textDecoration : 'inherit'};
    word-wrap: break-word;

    &:hover {
      background: ${props.copyable
        ? Colors.getWithAlpha('primaryBlack', 0.05)
        : 'initial'};
    }

    &:active {
      background: ${props.copyable
        ? Colors.getWithAlpha('primaryBlack', 0.1)
        : 'initial'};
    }
  `;
};

const Header1 = styled(Header1Component)`
  &&& {
    font-weight: bold;
    font-size: 4rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Header2 = styled(Header2Component)`
  &&& {
    font-weight: bold;
    font-size: 2.5rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Header3 = styled(Header3Component)`
  &&& {
    font-weight: bold;
    font-size: 2rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Header4 = styled(Header4Component)`
  &&& {
    font-weight: 600;
    font-size: 1rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Subtitle = styled(SubtitleComponent)`
  &&& {
    font-weight: 500;
    font-size: 1rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Body = styled(BodyComponent)`
  &&& {
    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const SmallBody = styled(SmallBodyComponent)`
  &&& {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 140%;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Small = styled(SmallBodyComponent)`
  &&& {
    font-weight: 400;
    font-size: 0.75rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Caption = styled(BodyComponent)`
  &&& {
    font-weight: 500;
    font-size: 1rem;
    line-height: 140%;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const Link = styled(BodyComponent)`
  font-weight: 500;
  cursor: pointer;
  && {
    ${(props) => generateCommonStyles(props)};
    font-size: 1rem;
    color: ${({ theme, foreground = theme.palette.get('textLink') }) =>
      foreground};
  }
  ${getTextAlign}
`;

const ButtonXL = styled(ButtonComponent)`
  &&& {
    font-weight: 500;
    font-size: 1rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const ButtonL = styled(ButtonComponent)`
  &&& {
    font-weight: 500;
    font-size: 1rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const ButtonM = styled(ButtonComponent)`
  &&& {
    font-weight: 500;
    font-size: 0.875rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

const ButtonS = styled(ButtonComponent)`
  &&& {
    font-weight: 500;
    font-size: 0.875rem;
    ${(props) => generateCommonStyles(props)};
  }
  ${getTextAlign}
`;

export {
  generateCommonStyles,
  StyledTypographyProps,
  Header1,
  Header2,
  Header3,
  Header4,
  Subtitle,
  Body,
  SmallBody,
  Small,
  Caption,
  Link,
  ButtonXL,
  ButtonL,
  ButtonM,
  ButtonS,
};
