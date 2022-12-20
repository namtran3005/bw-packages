import { Colors, ColorsType, Spacing, Transitions } from '@bitwala-cryptobank-squad/package-theme';
import { ListItem as MuiListItem } from '@material-ui/core';
import { ListItemProps as MuiListItemProps } from '@material-ui/core/ListItem';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import {
  CardTransactionAutomobileIcon,
  ChevronRightIcon,
  QRCodeIcon
} from '@bitwala-cryptobank-squad/package-icons';
import { mediaStyledProperties } from '../../utils/mediaStyledProperty';
import { Badge } from '../Badge';
import { getPxValue, RootSpacingProps } from '../Content/Content.styled';
import { Divider } from '../Divider';
import { Typography } from '../Typography';
import { ListItemIcon, RootProps as ListItemIconProps } from './ListItemIcon';

interface RootProps extends Omit<MuiListItemProps, 'ref'>, RootSpacingProps {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  selected?: boolean;
  variant?: string;
  description?: string;
  titleIcon?: React.ReactNode;
  icon?: React.ReactNode;
  badgeBackground?: ColorsType;
  textRightTop?: string;
  textRightBottom?: string;
  amountTitle?: string;
  amount?: string;
}

const highlightWidth = Spacing.unit / 2;
const doubleHighlightWidth = Spacing.unit + Spacing.unit / 2;

const RootComponent: React.FunctionComponent<RootProps> = ({
  selected,
  className,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  title,
  description,
  spacing,
  horizontalSpacing,
  verticalSpacing,
  topSpacing,
  bottomSpacing,
  leftSpacing,
  rightSpacing,
  maxWidth,
  fullHeight,
  variant,
  children,
  titleIcon,
  icon,
  textRightTop,
  textRightBottom,
  amountTitle,
  amount,
  badgeBackground,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => {
  const ListItemInfo = () => {
    return (
      <Fragment>
        <Typography.Body style={{ marginBottom: Spacing.unit / 2 }}>
          {title}
        </Typography.Body>
        <Typography.Body>{description}</Typography.Body>
      </Fragment>
    );
  };

  const ListItemRecipient = () => {
    return (
      <Fragment>
        <WrapperContentRecipient>
          <WrapperTextRecipient>
            <Typography.Body style={{ marginBottom: Spacing.unit / 2 }}>
              {title}
            </Typography.Body>
            <Typography.Body>{description}</Typography.Body>
          </WrapperTextRecipient>
          <ChevronRightIcon foreground="primaryBlack" />
        </WrapperContentRecipient>
        <Divider />
      </Fragment>
    );
  };

  const ListItemWealth = () => {
    return (
      <ContainerWealth>
        <Badge background="success" size="small" />
        <WrapperTitleWithIcon>
          <WrapperTexts>
            <WrapperTitleWealth>
              <Typography.Body
                style={{
                  marginRight: Spacing.unit / 2,
                }}
              >
                {title}
              </Typography.Body>
              {titleIcon}
            </WrapperTitleWealth>

            <Typography.Body
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {textRightTop} <ChevronRightIcon size={16} />
            </Typography.Body>
          </WrapperTexts>
          <WrapperTexts>
            <Typography.Body>{description}</Typography.Body>
            <Typography.Body>{textRightBottom}</Typography.Body>
          </WrapperTexts>
        </WrapperTitleWithIcon>
        <Divider />
      </ContainerWealth>
    );
  };

  const ListItemTransaction = () => {
    return (
      <ContainerTransaction>
        <div style={{ flex: 1, display: 'flex' }}>
          <QRCodeIcon />
          <WrapperTitleWithIcon>
            <WrapperTexts>
              <Typography.Body>{title}</Typography.Body>
              <Typography.Body> {textRightTop}</Typography.Body>
            </WrapperTexts>
            <WrapperTexts>
              <Typography.Body>{description}</Typography.Body>
              <Typography.Body>{textRightBottom}</Typography.Body>
            </WrapperTexts>
            <BadgeContainer>
              <Typography.Body>{amountTitle}</Typography.Body>
              <Typography.Body>{amount}</Typography.Body>
            </BadgeContainer>
          </WrapperTitleWithIcon>
        </div>
        <Divider />
      </ContainerTransaction>
    );
  };

  const ListItemDefault = () => {
    return (
      <Fragment>
        <CardTransactionAutomobileIcon foreground="primaryBlack" />
        <WrapperTitleDefault>
          <Typography.Body style={{ marginBottom: Spacing.unit / 2 }}>
            {title}
          </Typography.Body>
          <Typography.Body>{description}</Typography.Body>
        </WrapperTitleDefault>
        <ChevronRightIcon foreground="primaryBlack" />
      </Fragment>
    );
  };

  const renderStructureByVariant = (variant: string | undefined) => {
    switch (variant) {
      case 'info':
        return <ListItemInfo />;
      case 'recipient':
        return <ListItemRecipient />;
      case 'wealth':
        return <ListItemWealth />;
      case 'transaction':
        return <ListItemTransaction />;
      case 'default':
        return <ListItemDefault />;
      default:
        break;
    }
  };
  // Ignoring for now as the types are broken with current version of TS; https://github.com/mui-org/material-ui/issues/14971
  return (
    <MuiListItem
      className={selected ? [className, 'selected'].join(' ') : className}
      disableRipple={variant === 'sidepanel' ? true : false}
      {...(cleanProps as any)} // eslint-disable-line @typescript-eslint/no-explicit-any
    >
      {children ? children : renderStructureByVariant(variant)}
    </MuiListItem>
  );
};

const WrapperContentRecipient = styled.div`
  flex: 1;
  display: flex;
  border-bottom: 1px solid ${Colors.getWithAlpha('text', 0.25)};
  padding-bottom: 16px;
  align-items: center;
`;

const WrapperTextRecipient = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const WrapperTitleDefault = styled.div`
  flex: 1;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;

const WrapperTitleWithIcon = styled.div`
  flex: 1;
  margin-left: 8px;
  border-bottom: 1px solid ${Colors.getWithAlpha('text', 0.25)};
  padding-bottom: 16px;
`;

const WrapperTitleWealth = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperTexts = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  margin-bottom: 4px;
`;

const ContainerTransaction = styled.div`
  display: flex;
  flex: 1;
`;

const ContainerWealth = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  > button {
    margin-top: 8px;
  }
`;

const BadgeContainer = styled.div`
  width: 262px;
  border-radius: 8px;
  color: ${Colors.get('success')};
  background: ${Colors.getWithAlpha('success', 0.08)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 6px 8px;
  max-height: 31px;
  margin-top: 16px;
`;

const Root = styled(RootComponent)`
  &&& {
    box-shadow: 0 0 0 transparent;
    transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
    ${({ topSpacing, bottomSpacing, leftSpacing, rightSpacing, spacing }) =>
      mediaStyledProperties({
        'padding-top': {
          value:
            typeof topSpacing !== 'undefined'
              ? topSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.base / 2,
          transform: getPxValue,
        },
        'padding-bottom': {
          value:
            typeof bottomSpacing !== 'undefined'
              ? bottomSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.base / 2,
          transform: getPxValue,
        },
        'padding-left': {
          value:
            typeof leftSpacing !== 'undefined'
              ? leftSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.base,
          transform: getPxValue,
        },
        'padding-right': {
          value:
            typeof rightSpacing !== 'undefined'
              ? rightSpacing
              : typeof spacing !== 'undefined'
              ? spacing
              : Spacing.base,
          transform: getPxValue,
        },
      })};
    &:hover {
      ${({ button, variant }) =>
        !button || variant === 'sidepanel'
          ? `box-shadow: none !important;`
          : ''};
      ${({ variant }) =>
        variant === 'sidepanel'
          ? `background-color: ${Colors.getWithAlpha(
              'primaryGrey',
              0.5
            )}!important`
          : ''};
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      transition: width ${Transitions.duration.quick}ms
        ${Transitions.easing.swiftOut};
    }
    &:after {
      width: ${({ selected }) => (selected ? highlightWidth : 0)}px;
    }
    &:before {
      width: ${({ selected }) => (selected ? doubleHighlightWidth : 0)}px;
    }
  }
`;
export { Root, RootProps, highlightWidth, doubleHighlightWidth };
export {
  ListItem,
  ListItemIcon,
  ListItemIconProps,
  RootProps as ListItemProps,
};

const ListItem: React.FC<RootProps> = Root;


