import * as React from 'react';
import styled from 'styled-components';

import {
  Colors,
  ColorsType,
  Spacing,
  Transitions,
} from '@bitwala-cryptobank-squad/package-theme';
import { Radio, RadioProps } from '../Radio';
import { Typography } from '../Typography';

interface RootComponentProps {
  foreground?: ColorsType;
  checked?: boolean | string;
  labelOnly?: boolean;
}

interface Props {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

type RootProps = RootComponentProps & RadioProps & Props;

const RootComponent: React.FunctionComponent<RootComponentProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  checked,
  foreground,
  labelOnly,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <label {...cleanProps} />;

const RootRadioComponent: React.FunctionComponent<RootProps> = ({
  foreground,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  labelOnly,
  ...cleanProps
}) => (
  <Radio
    foreground={getForeground({ foreground, ...cleanProps })}
    {...cleanProps}
  />
);

const RootRadio = styled(RootRadioComponent)`
  &&& {
    display: inline-block;
    width: auto;
    height: auto;
    padding: ${Spacing.unit / 2}px;
    margin-top: -2px;

    ${({ labelOnly }) =>
      labelOnly
        ? `
      height: 0;
      overflow: hidden;
      position: absolute;
      opacity: 0;
    `
        : ''};
  }
`;

const RootLabel = styled(Typography.Body)``;

const getBackground = (props: RootProps): string =>
  props.checked
    ? Colors.get(props.foreground || 'primaryLilac')
    : 'transparent';
const getForeground = (props: RootProps): ColorsType =>
  props.checked ? 'white' : props.foreground || 'primaryLilac';
const checkedBorderWidth = Spacing.unit / 4;

const Root = styled(RootComponent)`
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: ${getBackground};
  color: ${(props) => Colors.get(getForeground(props))};
  padding: ${Spacing.unit / 4}px ${Spacing.unit};
  border-radius: 999px;
  margin-right: ${Spacing.unit}px;
  transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
  box-shadow: 0 0 0 0
      ${({ foreground }) =>
        Colors.getWithAlpha(getForeground({ foreground }), 0.2)},
    inset 0 0 0 ${checkedBorderWidth}px
      ${({ foreground }) => Colors.get(getForeground({ foreground }))};

  &:last-of-type {
    margin-right: 0;
  }

  &:focus-within {
    box-shadow: 0 0 0 ${checkedBorderWidth * 2}px
        ${({ foreground }) =>
          Colors.getWithAlpha(getForeground({ foreground }), 0.2)},
      inset 0 0 0 ${checkedBorderWidth}px
        ${({ foreground }) => Colors.get(getForeground({ foreground }))};
  }

  ${RootLabel} {
    color: ${Colors.get('text')};
    vertical-align: -1px; /* text baseline visual fix */
    display: inline-block;
    margin: ${Spacing.unit / 4}px;
    margin-left: ${({ labelOnly }) =>
      labelOnly ? Spacing.unit + Spacing.unit / 2 : Spacing.unit / 4}px;
    margin-right: ${Spacing.unit + Spacing.unit / 2}px;
    font-weight: bold;
  }
`;

Root.displayName = 'RadioButton';
RootComponent.displayName = 'RadioButtonComponent';
RootRadio.displayName = 'RadioButtonRadio';
RootRadioComponent.displayName = 'RadioButtonRadioComponent';
RootLabel.displayName = 'RadioButtonLabel';

interface RadioButtonProps extends RootProps {
  foreground?: ColorsType;
}

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({
  children,
  foreground,
  ...cleanProps
}) => (
  <Root
    {...{
      foreground,
      ...cleanProps,
    }}
  >
    <RootRadio disableRipple foreground={foreground} {...cleanProps} />
    <RootLabel>{children}</RootLabel>
  </Root>
);

export { RadioButton, RadioButtonProps };
