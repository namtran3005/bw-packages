import * as React from 'react';
import styled from 'styled-components';
import { currencyConfig, Currencies } from '@bitwala-cryptobank-squad/package-utils';
import {
  ColorsType,
  Spacing,
  Colors,
  Transitions,
} from '@bitwala-cryptobank-squad/package-theme';

import { GridLayout } from '../GridLayout';
import { Typography } from '../Typography';
import {
  MediaStyledProperty,
  mediaStyledProperties,
} from '../../utils/mediaStyledProperty';

interface CurrencyValue {
  value: string | number;
  currency: string;
}

interface RootProps {
  children?: React.ReactNode;
  currency?: string;
  currencyText?: string;
  balanceConversion?: string;
  variant?: 'balance' | 'exchangeRate';
  state?: 'normal' | 'active' | 'passive' | 'empty';
  label?: string;
  icon?: React.ReactNode;
  subicon?: React.ReactNode;
  subiconForeground?: ColorsType;
  subiconBackground?: ColorsType;
  background?: ColorsType;
  backgroundAlpha?: number;
  activeBackground?: ColorsType;
  activeBackgroundAlpha?: number;
  foreground?: ColorsType;
  foregroundAlpha?: number;
  activeForeground?: ColorsType;
  badgeForeground?: ColorsType;
  balanceConversionForeground?: ColorsType;
  exchangeRateFrom?: CurrencyValue;
  exchangeRateTo?: CurrencyValue;
  exchangeForegroundAlpha?: number;
  exchangeActiveForegroundAlpha?: number;
  compact?: MediaStyledProperty<boolean>;
}

/**
 * Type after `RootStyled.defaultProps` is set
 */
interface RootInternalProps extends RootProps {
  subiconForeground: NonNullable<RootProps['subiconForeground']>;
  subiconBackground: NonNullable<RootProps['subiconBackground']>;
  background: NonNullable<RootProps['background']>;
  backgroundAlpha: NonNullable<RootProps['backgroundAlpha']>;
  activeBackgroundAlpha: NonNullable<RootProps['activeBackgroundAlpha']>;
  foreground: NonNullable<RootProps['foreground']>;
  foregroundAlpha: NonNullable<RootProps['foregroundAlpha']>;
  activeForeground: NonNullable<RootProps['activeForeground']>;
  badgeForeground: NonNullable<RootProps['badgeForeground']>;
  balanceConversionForeground: NonNullable<
    RootProps['balanceConversionForeground']
  >;
  exchangeForegroundAlpha: NonNullable<RootProps['exchangeForegroundAlpha']>;
  exchangeActiveForegroundAlpha: NonNullable<
    RootProps['exchangeActiveForegroundAlpha']
  >;
}

const RootComponent: React.FunctionComponent<RootInternalProps> = ({
  ...cleanProps
}) => <div {...cleanProps} />;

const currencyBadgeSize = Spacing.unit * 4;

const getBalanceBorderColor = ({ state, background }: RootInternalProps) => {
  if (state === 'active') {
    return 'transparent';
  }

  if (state === 'passive') {
    Colors.getWithAlpha(background, 0.6);
  }

  return Colors.get(background);
};

const labelDefaultBackgroundColor = Colors.get('backgroundLight');
const getLabelBackgroundColor = ({ state }: RootInternalProps) => {
  return state === 'active' ? 'transparent' : labelDefaultBackgroundColor;
};

const RootLabel = styled(Typography.SmallBody)``;
const RootBadge = styled.div``;
const RootBadgeSubicon = styled.div``;
const RootIcon = styled.div``;
const RootText = styled.span``;
const RootValue = styled(Typography.ButtonXL).withConfig({
  shouldForwardProp: (prop) => !['subiconBackground'].includes(prop),
})`
  font-size: 1rem !important;
`;
const RootValueCurrency = styled(Typography.ButtonL).withConfig({
  shouldForwardProp: (prop) => !['subiconBackground'].includes(prop),
})`
  font-size: 1rem !important;
`;
const RootSecondaryValue = styled(Typography.ButtonM).withConfig({
  shouldForwardProp: (prop) => !['subiconBackground'].includes(prop),
})`
  font-size: 1rem !important;
`;
const RootEqualitySymbol = styled(Typography.ButtonXL).withConfig({
  shouldForwardProp: (prop) => !['subiconBackground'].includes(prop),
})`
  align-self: center;
  font-size: 1rem !important;
`;
const RootStyled = styled(RootComponent).withConfig({
  shouldForwardProp: (prop) =>
    ![
      'subiconBackground',
      'exchangeActiveForegroundAlpha',
      'balanceConversion',
      'exchangeForegroundAlpha',
      'balanceConversionForeground',
      'badgeForeground',
      'activeForeground',
      'foregroundAlpha',
      'activeBackgroundAlpha',
      'backgroundAlpha',
      'subiconForeground',
      'currencyText',
      'exchangeRateTo',
      'exchangeRateFrom',
    ].includes(prop),
})`
  display: ${({ variant }) =>
    variant === 'exchangeRate' ? 'flex' : 'inline-block'};
  align-items: center;
  /*
   * Some static values here for visual corrections but
   * the element itself still has the correct height that
   * fits the style guide
   */
  ${({ variant, compact = false }) =>
    mediaStyledProperties({
      padding: {
        value: compact,
        transform: (value: boolean) =>
          value
            ? variant === 'exchangeRate'
              ? '2px 12px 2px 12px'
              : '0 12px 0 4px'
            : variant === 'exchangeRate'
            ? '9px 24px'
            : '6px 12px',
      },

      height: {
        value: compact,
        transform: (value: boolean) => {
          return value ? Spacing.unit * 5 + 'px' : Spacing.unit * 7 + 'px';
        },
      },
      'min-width': {
        value: compact,
        transform: (value: boolean) => {
          return value ? 'none' : Spacing.unit * 25 + 'px';
        },
      },
    })}
  position: relative;
  border-radius: 999px;
  box-sizing: border-box;
  background: ${({
    state,
    background,
    variant,
    exchangeForegroundAlpha,
    exchangeActiveForegroundAlpha,
    backgroundAlpha,
    activeBackgroundAlpha,
  }) =>
    Colors.getWithAlpha(
      background,
      variant === 'exchangeRate'
        ? state === 'active'
          ? exchangeActiveForegroundAlpha
          : exchangeForegroundAlpha
        : state === 'active'
        ? activeBackgroundAlpha
        : backgroundAlpha
    )};
  color: ${({ state, foreground, activeForeground }) =>
    state === 'active' ? activeForeground : foreground};
  border: 2px solid ${getBalanceBorderColor};
  white-space: nowrap;
  transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};

  &:last-of-type {
    margin-right: 0;
  }

  ${RootBadge} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    display: inline-block;
    width: ${({ compact }) => currencyBadgeSize + (compact ? 0 : 8)}px;
    height: ${({ compact }) => currencyBadgeSize + (compact ? 0 : 8)}px;
    font-family: Lato;
    font-weight: bold;
    color: ${({ badgeForeground }) => Colors.get(badgeForeground)};
    background: ${({ background }) => Colors.get(background)};
    box-sizing: border-box;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    margin-right: ${Spacing.unit}px;
    line-height: 2em;
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};

    margin-top: 0px;
    margin-left: ${({ compact }) => (compact ? 0 : -4)}px;
  }

  ${RootBadgeSubicon} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    right: 0;
    border: 2px solid
      ${({ subiconForeground }) => Colors.get(subiconForeground)};
    color: ${({ subiconForeground }) => Colors.get(subiconForeground)};
    background: ${({ subiconBackground }) => Colors.get(subiconBackground)};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transform: translate(30%, 30%);
  }

  ${RootIcon} {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Correction */
    height: 100%;
    color: ${({ badgeForeground }) => Colors.get(badgeForeground)};
  }

  ${RootLabel} {
    position: absolute;
    top: 0;
    margin: -11px 8px 0;
    padding: 0 3px;
    background: ${getLabelBackgroundColor};
    text-shadow: ${({ state }) =>
      state === 'active'
        ? `
      -1px 1px 0 ${labelDefaultBackgroundColor},
      1px 1px 0 ${labelDefaultBackgroundColor},
      1px -1px 0 ${labelDefaultBackgroundColor},
      -1px -1px 0 ${labelDefaultBackgroundColor};
    `
        : ''};
    &:hover {
      background: ${getLabelBackgroundColor} !important;
    }
  }

  ${RootText} {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
  }

  ${RootSecondaryValue}${RootSecondaryValue}${RootSecondaryValue} {
    color: ${({ state, background, balanceConversionForeground }) =>
      Colors.get(
        state === 'active' ? background : balanceConversionForeground
      )};
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
    margin-top: -12px;
  }

  ${RootValue}${RootValue}${RootValue} {
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    color: ${({ state, foreground, activeForeground }) =>
      Colors.get(state === 'active' ? activeForeground : foreground)};
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
    padding-right: 10px;
    padding-top: 5px;
    font-weight: bold;
  }

  ${RootValueCurrency} {
    display: inline-block;
    font-variant: small-caps;
    margin-left: ${Spacing.unit / 4}px;
  }

  ${RootEqualitySymbol} {
    display: inline-block;
    vertical-align: middle;
    margin: ${Spacing.unit / 2}px ${Spacing.unit}px;
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
  }
  .stackedExchangeRate {
    margin-top: -6px;
    padding-top: 0 !important;
  }
  .defaultExchangeRate {
    padding-top: 0 !important;
  }

  .exchangeRate {
    padding-right: 0 !important;
    padding-top: 0 !important;
  }
`;

RootStyled.displayName = 'Balance';
RootText.displayName = 'BalanceText';
RootValue.displayName = 'BalanceValue';
RootValueCurrency.displayName = 'BalanceValueCurrency';
RootSecondaryValue.displayName = 'BalanceSecondaryValue';
RootBadge.displayName = 'BalanceBadge';
RootBadgeSubicon.displayName = 'BalanceBadgeSubicon';
RootIcon.displayName = 'BalanceIcon';
RootEqualitySymbol.displayName = 'BalanceEqualitySymbol';

RootStyled.defaultProps = {
  subiconForeground: 'primaryLilac',
  subiconBackground: 'primaryBlack',
  background: 'primaryLilac',
  backgroundAlpha: 0,
  activeBackgroundAlpha: 0.25,
  foreground: 'text',
  foregroundAlpha: 1,
  activeForeground: 'text',
  badgeForeground: 'text',
  balanceConversionForeground: 'subtitleText',
  exchangeForegroundAlpha: 0,
  exchangeActiveForegroundAlpha: 0.75,
};

const Root: React.FC<RootProps> = ({ children, ...props }) => (
  <RootStyled {...(props as RootInternalProps)}>{children}</RootStyled>
);

const Balance: React.FunctionComponent<RootProps> = ({
  children,
  ...cleanProps
}) => {
  const {
    label,
    icon,
    subicon,
    currency,
    currencyText,
    balanceConversion,
    variant,
    state,
    exchangeRateFrom,
    exchangeRateTo,
  } = cleanProps;

  return (
    <Root {...cleanProps}>
      {label && <RootLabel foreground="subtitleText">{label}</RootLabel>}
      {variant !== 'exchangeRate' && currency && (
        <RootBadge>
          {icon ? (
            <RootIcon>{icon}</RootIcon>
          ) : (
            currencyConfig[currency as Currencies].symbol
          )}
          {subicon && <RootBadgeSubicon>{subicon}</RootBadgeSubicon>}
        </RootBadge>
      )}
      {variant === 'exchangeRate' && exchangeRateFrom && exchangeRateTo ? (
        <React.Fragment>
          <RootValue style={{ paddingRight: 0 }} className="exchangeRate">
            {exchangeRateFrom.value}
            <RootValueCurrency>{exchangeRateFrom.currency}</RootValueCurrency>
          </RootValue>
          <RootEqualitySymbol>=</RootEqualitySymbol>
          <RootValue className="exchangeRate">
            {exchangeRateTo.value}
            <RootValueCurrency className="exchangeRate">
              {exchangeRateTo.currency}
            </RootValueCurrency>
          </RootValue>
        </React.Fragment>
      ) : (
        <RootText>
          <GridLayout inline fullHeight alignItems="center">
            <RootValue
              className={
                balanceConversion
                  ? 'stackedExchangeRate'
                  : 'defaultExchangeRate'
              }
            >
              {children}
              {state !== 'empty' && (
                <RootValueCurrency>
                  {currencyText !== undefined ? currencyText : currency}
                </RootValueCurrency>
              )}
            </RootValue>
            {balanceConversion && (
              <RootSecondaryValue>{balanceConversion}</RootSecondaryValue>
            )}
          </GridLayout>
        </RootText>
      )}
    </Root>
  );
};

export { Balance, RootProps as BalanceProps };
