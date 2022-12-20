import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '@bitwala-cryptobank-squad/package-theme';
import { Paper, PaperProps } from '../../components/Paper';
import {
  List,
  ListProps,
  ListItem,
  ListItemProps,
} from '../../components/List';

interface AutocompleteMenuProps {
  paperProps?: PaperProps;
  listProps?: ListProps;
  dropdownHeight?: 'small' | 'medium' | 'big';
}

interface AutocompleteMenuItemProps extends ListItemProps {
  selected?: boolean;
  highlighted?: boolean;
}

const AutocompleteMenuItemComponent: React.FunctionComponent<AutocompleteMenuItemProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  selected,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  highlighted,
  ...cleanProps
}) => <ListItem {...cleanProps} />;

const AutocompleteMenuComponent: React.FunctionComponent<AutocompleteMenuProps> = ({
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

const AutocompleteMenuItem = styled(AutocompleteMenuItemComponent)`
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

const AutocompleteMenu = styled(AutocompleteMenuComponent)`
  &&& {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: ${({ dropdownHeight = 'big' }) =>
      dropdownHeight === 'small'
        ? '140px'
        : dropdownHeight === 'medium'
        ? '243px'
        : dropdownHeight === 'big' && '294px'};
    z-index: 6230;
    overflow: auto;
  }
`;

const Root = styled.div`
  &&& {
    position: relative;
  }
`;

Root.displayName = 'Autocomplete';

export {
  Root,
  AutocompleteMenu,
  AutocompleteMenuProps,
  AutocompleteMenuComponent,
  AutocompleteMenuItem,
  AutocompleteMenuItemProps,
  AutocompleteMenuItemComponent,
};
