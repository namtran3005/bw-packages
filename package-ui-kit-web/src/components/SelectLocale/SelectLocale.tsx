import React, { useState } from 'react';
import Downshift, {
  DownshiftProps,
  ControllerStateAndHelpers,
} from 'downshift';
import {
  ChevronRightIcon,
  DeFlagIcon,
  UkFlagIcon,
} from '@bitwala-cryptobank-squad/package-icons';
import {
  Locales,
  localeOptions as defaultLocaleOptions,
} from '@bitwala-cryptobank-squad/package-constants';

import { Icon } from '../Icon';
import { ListItemIcon } from '../List';
import { Typography } from '../Typography/';
import {
  Root,
  ChevronDown,
  IconContainer,
  LocaleIconButton,
  LocaleIconButtonProps,
  SelectLocaleMenu,
  SelectLocaleMenuItem,
  SelectLocaleMenuProps,
} from './SelectLocale.styled';

interface LocaleIconsMap {
  [Locales.en]: React.ReactNode;
  [Locales.de]: React.ReactNode;
}

interface LocaleOptionType {
  label: string;
  value: string;
}

interface SelectLocaleProps {
  downshiftProps?: DownshiftProps<LocaleOptionType>;
  dropdownHeight?: SelectLocaleMenuProps['dropdownHeight'];
  getLocaleIcon: (localeOptionValue: string) => React.ReactNode;
  localeButtonProps?: LocaleIconButtonProps;
  localeOptions: LocaleOptionType[];
  onChange?: (
    selectedItem: LocaleOptionType,
    stateAndHelpers: ControllerStateAndHelpers<LocaleOptionType>
  ) => void;
  value: string;
}

const localeIconsMap: LocaleIconsMap = {
  [Locales.en]: <UkFlagIcon />,
  [Locales.de]: <DeFlagIcon />,
};

const defaultGetLocaleIcon = (locale: Locales): React.ReactNode =>
  localeIconsMap[locale];

const itemToString = (item: LocaleOptionType) => {
  if (item) {
    return item.label || item.value;
  }
  return '';
};

function SelectLocale(props: SelectLocaleProps) {
  const [isMenuOpen, setMenuState] = useState(false);

  const {
    downshiftProps,
    dropdownHeight,
    getLocaleIcon,
    localeButtonProps,
    localeOptions,
    value,
  } = props;

  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);

  const getInitialSelectedItem = (selectedValue: string) => {
    const foundOption = localeOptions.find(
      (localeOption) => localeOption.value === selectedValue
    );
    if (foundOption) {
      return foundOption;
    }
    return null;
  };

  const handleSelect = (
    selectedItem: LocaleOptionType,
    stateAndHelpers: ControllerStateAndHelpers<LocaleOptionType>
  ) => {
    if (props.onChange) {
      props.onChange(selectedItem, stateAndHelpers);
    }

    closeMenu();
  };

  const isSelected = (
    selectedItem: LocaleOptionType,
    item: LocaleOptionType
  ): boolean => {
    if (selectedItem) {
      return selectedItem.value === item.value;
    }
    return false;
  };

  return (
    <Downshift
      itemToString={itemToString}
      isOpen={isMenuOpen}
      onOuterClick={closeMenu}
      onSelect={handleSelect}
      initialSelectedItem={getInitialSelectedItem(value)}
      {...downshiftProps}
    >
      {({
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <Root data-test="locale-toggle">
            <div>
              <LocaleIconButton
                classes={{
                  disabled: 'disabled',
                }}
                {...localeButtonProps}
                onClick={isOpen ? closeMenu : openMenu}
              >
                <IconContainer>
                  <Icon size={24}>{getLocaleIcon(value)}</Icon>
                </IconContainer>
                <ChevronDown>
                  <ChevronRightIcon />
                </ChevronDown>
              </LocaleIconButton>
            </div>
            {isOpen && (
              <SelectLocaleMenu
                dropdownHeight={dropdownHeight}
                listProps={{ ...getMenuProps() }}
              >
                {localeOptions.length > 0 &&
                  localeOptions.map((item, index) => (
                    <SelectLocaleMenuItem
                      key={`locale_${index}`}
                      selected={isSelected(selectedItem, item)}
                      highlighted={highlightedIndex === index}
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                      })}
                    >
                      <ListItemIcon key={index}>
                        <Icon size={24}>{getLocaleIcon(item.value)}</Icon>
                      </ListItemIcon>
                      <Typography>{item.label || item.value}</Typography>
                    </SelectLocaleMenuItem>
                  ))}
              </SelectLocaleMenu>
            )}
          </Root>
        </div>
      )}
    </Downshift>
  );
}

SelectLocale.defaultProps = {
  getLocaleIcon: defaultGetLocaleIcon,
  localeOptions: defaultLocaleOptions,
  value: Locales.en,
};

export { SelectLocale, SelectLocaleProps, LocaleOptionType };
