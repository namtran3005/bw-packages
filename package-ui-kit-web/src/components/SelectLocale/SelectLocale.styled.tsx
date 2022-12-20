import * as React from 'react';
import styled from 'styled-components';
import { ButtonBase as MuiButtonBase } from '@material-ui/core';
import { ButtonBaseProps as MuiButtonBaseProps } from '@material-ui/core/ButtonBase';
import { ColorsType, Colors, Spacing } from '@bitwala-cryptobank-squad/package-theme';
import { Paper, PaperProps } from '../Paper';
import { List, ListProps, ListItem, ListItemProps } from '../List';

interface LocaleIconButtonProps extends MuiButtonBaseProps {
  background?: ColorsType;
  foreground?: ColorsType;
  ripple?: boolean;
  hoverForeground?: ColorsType;
}

interface SelectLocaleMenuProps {
  paperProps?: PaperProps;
  listProps?: ListProps;
  dropdownHeight?: 'small' | 'medium' | 'big';
}

interface SelectLocaleMenuItemProps extends ListItemProps {
  selected?: boolean;
  highlighted?: boolean;
}

const SelectLocaleMenuItemComponent: React.FunctionComponent<SelectLocaleMenuItemProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  selected,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  highlighted,
  ...cleanProps
}) => <ListItem {...cleanProps} />;

const SelectLocaleMenuComponent: React.FunctionComponent<SelectLocaleMenuProps> = ({
  paperProps,
  listProps,
  children,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  dropdownHeight,
  ...cleanProps
}) => (
  <Paper spacing={0} elevation={24} {...paperProps} {...cleanProps}>
    <List {...listProps}>{children}</List>
  </Paper>
);

const LocaleIconButtonComponent: React.FunctionComponent<LocaleIconButtonProps> = ({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  background,
  foreground,
  hoverForeground,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ripple = true,
  ...cleanProps
}) => (
  <MuiButtonBase
    focusRipple={!ripple}
    disableRipple={!ripple}
    {...cleanProps}
  />
);

const SelectLocaleMenuItem = styled(SelectLocaleMenuItemComponent)`
  &&& {
    background-color: ${({ highlighted, selected }) =>
      highlighted || selected
        ? Colors.get('primaryGrey')
        : Colors.getWithAlpha('white', 0)} !important;
    cursor: pointer;

    &:hover {
      box-shadow: none !important;
    }
  }
`;

const SelectLocaleMenu = styled(SelectLocaleMenuComponent)`
  &&& {
    position: absolute;
    top: 100%;
    right: 0;
    max-height: ${({ dropdownHeight = 'small' }) =>
      dropdownHeight === 'small'
        ? '140px'
        : dropdownHeight === 'medium'
        ? '243px'
        : dropdownHeight === 'big' && '294px'};
    z-index: 6230;
    overflow: auto;
  }
`;

const IconContainer = styled.span`
  display: inline-block;
  margin: 0 ${Spacing.unit}px;
`;

const ChevronDown = styled.span`
  &&& {
    display: inline-block;
    font-size: 0;
    line-height: 0;
    transform: rotate(90deg);
  }
`;

const LocaleIconButton = styled(LocaleIconButtonComponent)`
  &&& {
    white-space: nowrap;
    border-radius: 0;
    line-height: 0;
    background: ${({ background }) =>
      background ? Colors.get(background) : 'inherit'};
    color: ${({ foreground }) =>
      foreground ? Colors.get(foreground) : 'inherit'};
    display: inline-block;
    padding: ${({ ripple = true }) =>
      ripple ? `${Spacing.unit}px ${Spacing.unit * 1.5}px` : '0px'};

    ${({ ripple = true }) =>
      ripple
        ? null
        : `
      background: transparent;
      opacity: 0.5;
    `};

    &:hover {
      color: ${({ hoverForeground }) =>
        Colors.get(hoverForeground ? hoverForeground : 'primaryBlack')};
    }

    &:focus {
      ${({ ripple = true }) => (ripple ? null : 'opacity: 0.8;')};
    }

    &:active {
      ${({ ripple = true }) => (ripple ? null : 'opacity: 1;')};
    }
  }
`;

const Root = styled.div`
  &&& {
    position: relative;
  }
`;

Root.displayName = 'SelectLocale';

export {
  Root,
  ChevronDown,
  IconContainer,
  LocaleIconButton,
  LocaleIconButtonProps,
  LocaleIconButtonComponent,
  SelectLocaleMenu,
  SelectLocaleMenuProps,
  SelectLocaleMenuComponent,
  SelectLocaleMenuItem,
  SelectLocaleMenuItemProps,
  SelectLocaleMenuItemComponent,
};
