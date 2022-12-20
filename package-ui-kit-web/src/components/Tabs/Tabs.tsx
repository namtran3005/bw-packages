import * as React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import {
  Colors,
  ColorsType,
  Spacing,
  Transitions,
} from '@bitwala-cryptobank-squad/package-theme';
import { Tabs as MuiTabs, Tab as MuiTab } from '@material-ui/core';
import { TabsProps as MuiTabsProps } from '@material-ui/core/Tabs';

import { Content, Typography } from '../..';
import { TabsItem, TabsItemProps } from '../TabsItem';
import { SpacingType } from '../Content';

interface TabsProps extends RootProps {
  value: number;
  foreground?: ColorsType;
  labelBarStartContent?: React.ReactNode;
  labelBarEndContent?: React.ReactNode;
}

interface RootProps extends Omit<MuiTabsProps, 'onChange' | 'ref'> {
  innerRef?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  onChange?: (
    event: React.ChangeEvent<{}> | React.FormEvent<HTMLButtonElement>,
    value: number
  ) => void;
  spacing?: SpacingType;
  gap?: SpacingType;
  indicatorForeground?: ColorsType;
}

interface RootLabelBarContentProps {
  fullWidth?: boolean;
  textColor?: string;
  indicator?: React.ReactNode;
}

const defaultSpacing = 24;

const RootLabelBarContentComponent: React.FunctionComponent<RootLabelBarContentProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  fullWidth,
  indicator,
  textColor,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...cleanProps
}) => <div {...cleanProps} />;

const RootLabelBarContent = styled(RootLabelBarContentComponent)``;

const RootTab = styled(MuiTab).withConfig({
  shouldForwardProp: (prop) => !['indicatorForeground'].includes(prop),
})`
  &&& {
    position: relative;
    text-align: left;
    text-transform: none;
    opacity: 0.5;
    transition: ${Transitions.duration.normal}ms ${Transitions.easing.swiftOut};
    max-width: none;
    min-height: 0;
    height: fit-content;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: ${Spacing.unit / 2};

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: ${Transitions.duration.normal}ms
        ${Transitions.easing.swiftOut};
      width: ${Spacing.unit * 2}px;
      height: ${Spacing.unit / 2}px;
    }

    &:focus {
      &:before {
        opacity: 0.4;
      }
    }

    &.selected {
      opacity: 1;

      &:focus {
        &:before {
          opacity: 0;
        }
      }
    }

    &.disabled {
      opacity: 0.1;
    }

    .wrapper {
      align-items: start;
    }
  }
`;

const Root: React.FC<RootProps> = styled(MuiTabs).withConfig({
  shouldForwardProp: (prop) => !['indicatorForeground'].includes(prop),
})`
  &&& {
    margin-bottom: -${({ spacing }) => (typeof spacing !== 'undefined' ? spacing : defaultSpacing)}px;
    padding: ${({ spacing }) =>
      typeof spacing !== 'undefined' ? spacing : defaultSpacing}px;
    min-height: 0;

    .indicator {
      background: ${({ indicatorForeground }: RootProps) =>
        Colors.get(indicatorForeground || 'primaryLilac')};
      width: ${Spacing.unit * 2}px !important;
      height: ${Spacing.unit / 2}px;
    }

    .react-swipeable-view-container > div {
      overflow: visible !important;
    }

    ${RootTab} {
      margin-left: ${({ gap }) => (gap || 0) / 2}px;
      margin-right: ${({ gap }) => (gap || 0) / 2}px;

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

    ${RootTab}:focus:before {
      background: ${({ indicatorForeground }) =>
        Colors.get(indicatorForeground || 'primaryLilac')};
    }
  }
`;

const RootTabContainer = Content;

Root.displayName = 'Tabs';
RootTab.displayName = 'TabsTab';
RootTabContainer.displayName = 'TabsTabContainer';

class Tabs extends React.Component<TabsProps, {}> {
  public static Item = TabsItem;

  public renderTabs(): ({} | null | undefined)[] | undefined | null {
    return React.Children.map(this.props.children, (child) => {
      if (!child || !React.isValidElement(child)) {
        return child;
      }
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      const { label, children, ...cleanProps } = child.props as TabsItemProps;
      const { foreground } = this.props;

      return (
        <RootTab
          classes={{
            root: 'root',
            labelIcon: 'labelIcon',
            textColorInherit: 'textColorInherit',
            textColorPrimary: 'textColorPrimary',
            textColorSecondary: 'textColorSecondary',
            selected: 'selected',
            disabled: 'disabled',
            fullWidth: 'fullWidth',
            wrapper: 'wrapper',
          }}
          disableRipple
          label={
            typeof label === 'string' ? (
              <Typography.Header4 foreground={foreground || 'primaryLilac'}>
                {label}
              </Typography.Header4>
            ) : (
              label
            )
          }
          {...cleanProps}
        />
      );
    });
  }

  public renderTabsContainers(): ({} | null | undefined)[] | undefined | null {
    return React.Children.map(this.props.children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      return <RootTabContainer spacing={this.props.spacing} {...child.props} />;
    });
  }

  public render(): JSX.Element {
    const {
      labelBarStartContent,
      labelBarEndContent,
      ...cleanProps
    } = this.props;

    return (
      <React.Fragment>
        <Root
          onChange={cleanProps.onChange}
          value={cleanProps.value}
          variant="fullWidth"
          classes={{
            root: 'root',
            flexContainer: 'flexContainer',
            scroller: 'scroller',
            fixed: 'fixed',
            scrollable: 'scrollable',
            centered: 'centered',
            scrollButtons: 'scrollButtons',
            scrollButtonsDesktop: 'scrollButtonsDesktop',
            indicator: 'indicator',
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(cleanProps as any)}
        >
          {labelBarStartContent && (
            <RootLabelBarContent>{labelBarStartContent}</RootLabelBarContent>
          )}

          {this.renderTabs()}

          {labelBarEndContent && (
            <RootLabelBarContent>{labelBarEndContent}</RootLabelBarContent>
          )}
        </Root>
        <SwipeableViews index={cleanProps.value} animateHeight={false} disabled>
          {this.renderTabsContainers()}
        </SwipeableViews>
      </React.Fragment>
    );
  }
}

export { Tabs, TabsProps, TabsItem, TabsItemProps };
