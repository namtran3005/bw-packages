import * as React from 'react';
import Downshift, {
  DownshiftProps,
  ControllerStateAndHelpers,
} from 'downshift';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';
import { TextField, TextFieldProps } from '../TextField';
import { Typography } from '../Typography';
import { Divider } from '../Divider';
import { List } from '../List';
import {
  Root,
  AutocompleteMenu,
  AutocompleteMenuItem,
  AutocompleteMenuProps,
} from './Autocomplete.styled';

interface AutocompleteOptionType {
  value: string;
  label?: string;
}

interface AutocompleteProps {
  options: AutocompleteOptionType[];
  featuredOptions?: AutocompleteOptionType[];
  downshiftProps?: DownshiftProps<AutocompleteOptionType>;
  notFoundLabel: string | React.ReactNode;
  dropdownHeight?: AutocompleteMenuProps['dropdownHeight'];
  label?: TextFieldProps['label'];
  helperText?: TextFieldProps['helperText'];
  error?: TextFieldProps['error'];
  placeholder?: TextFieldProps['placeholder'];
  textFieldProps?: TextFieldProps;
  value?: TextFieldProps['value'];
  id?: TextFieldProps['id'];
  name?: TextFieldProps['name'];
  autoFocus?: TextFieldProps['autoFocus'];
  reducer?: keyof Reducers;
  onChange?: (
    selectedItem: AutocompleteOptionType,
    stateAndHelpers: ControllerStateAndHelpers<AutocompleteOptionType>
  ) => void;
  onSelect?: (
    selectedItem: AutocompleteOptionType,
    stateAndHelpers: ControllerStateAndHelpers<AutocompleteOptionType>
  ) => void;
  onInput?: TextFieldProps['onInput'];
  onBlur?: TextFieldProps['onBlur'];
  onFocus?: TextFieldProps['onFocus'];
  onClick?: TextFieldProps['onClick'];
  onClear?: TextFieldProps['onInput'];
  blacklistedOptions?: string[];
  menuHelpContentTop?: React.ReactNode;
  menuHelpContentTopBackground?: ColorsType;
  menuHelpContentTopBackgroundAlpha?: number;
}

interface AutocompleteState {
  isMenuOpen: boolean;
}

type Reducer = (
  input: string | null,
  options: AutocompleteOptionType[]
) => AutocompleteOptionType[];

interface Reducers {
  none: Reducer;
  unorderedMatch: Reducer;
  orderedMatch: Reducer;
}

interface AutocompleteOptionTypeWithScore extends AutocompleteOptionType {
  score: number;
}

const reducers: Reducers = {
  none: (input, options) => options,
  unorderedMatch(input, options) {
    if (!input) {
      return options;
    }
    const processedInput = input.toLowerCase();

    return options.filter((item) => {
      if (item.label) {
        const label = item.label && item.label.toLowerCase();
        return label.includes(processedInput);
      }

      const value = item.value.toLowerCase();
      return value.includes(processedInput);
    });
  },
  orderedMatch(input, options): AutocompleteOptionType[] {
    if (!input) {
      return options;
    }
    const processedInput = input.toLowerCase();

    return options
      .reduce((accumulator, item) => {
        const label = item.label && item.label.toLowerCase();
        const value = item.value.toLowerCase();
        let score = 0;

        if (
          label &&
          (label.includes(processedInput) || value.includes(processedInput))
        ) {
          if (label.indexOf(processedInput) !== -1) {
            score = label.indexOf(processedInput);
          }

          if (value.indexOf(processedInput) !== -1) {
            score = value.indexOf(processedInput);
          }

          accumulator.push({
            ...item,
            score,
          });
        }

        return accumulator;
      }, [] as AutocompleteOptionTypeWithScore[])
      .sort((prev, next) => prev.score - next.score)
      .map(({ value, label }) => ({
        value,
        label,
      }));
  },
};

const itemToString = (item: AutocompleteOptionType) => {
  if (item) {
    return item.label || item.value;
  }
  return '';
};
// Fix for misbehaviour of text field on blur
const clearInputProps = (getInputProps: TextFieldProps['inputProps']) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const { onBlur, ...getInputPropsRest } = getInputProps as any;
  return getInputPropsRest;
};

class Autocomplete extends React.Component<
  AutocompleteProps,
  AutocompleteState
> {
  public currentReducer?: Reducer;
  public isMenuOpen?: boolean;

  constructor(props: AutocompleteProps) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
    this.componentDidUpdate();
  }

  public componentDidUpdate(): void {
    const reducerKey: keyof Reducers = this.props.reducer || 'orderedMatch';
    this.currentReducer = reducers[reducerKey];
  }

  public openMenu = () => {
    this.setState({
      isMenuOpen: true,
    });
  };

  public closeMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
  };

  public handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    this.openMenu();
  };

  public handleBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    stateAndHelpers: ControllerStateAndHelpers<AutocompleteOptionType>
  ) => {
    // if text input is empty, reset selection
    // if it's not, set input value to a selected item label
    if (!stateAndHelpers.inputValue) {
      stateAndHelpers.clearSelection();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.handleChange(null as any, stateAndHelpers); // a dirty hack to make sure onChange event was triggered
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.handleSelect(null as any, stateAndHelpers); // a dirty hack to make sure onSelect event was triggered
    } else {
      stateAndHelpers.setState({
        inputValue:
          this.getDefaultInputValue(this.props.value as string) ||
          (this.props.value as string),
      });
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    this.closeMenu();
  };

  public handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
    if (this.props.downshiftProps && this.props.downshiftProps.initialIsOpen) {
      this.openMenu();
    }
  };

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  public handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    this.openMenu();

    if (this.props.textFieldProps && this.props.textFieldProps.onInput) {
      this.props.textFieldProps.onInput(event);
    }
  };

  public handleChange = (
    selectedItem: AutocompleteOptionType,
    stateAndHelpers: ControllerStateAndHelpers<AutocompleteOptionType>
  ) => {
    if (this.props.onChange) {
      this.props.onChange(selectedItem, stateAndHelpers);
    }

    this.closeMenu();
  };

  public handleSelect = (
    selectedItem: AutocompleteOptionType,
    stateAndHelpers: ControllerStateAndHelpers<AutocompleteOptionType>
  ) => {
    if (this.props.onSelect) {
      this.props.onSelect(selectedItem, stateAndHelpers);
    }

    this.closeMenu();
  };

  public getDefaultInputValue = (value: string) => {
    const { options } = this.props;
    const foundOption = options.find((option) => option.value === value);
    if (foundOption) {
      return foundOption.label;
    }
    return value || '';
  };

  public render(): JSX.Element {
    const {
      downshiftProps,
      notFoundLabel,
      label,
      helperText,
      error,
      textFieldProps,
      dropdownHeight,
      placeholder,
      value,
      id,
      name,
      autoFocus,
      blacklistedOptions = [],
      menuHelpContentTop,
      menuHelpContentTopBackground,
      menuHelpContentTopBackgroundAlpha,
    } = this.props;
    const featuredOptions = (this.props.featuredOptions || []).filter(
      (o) => blacklistedOptions.indexOf(o.value) === -1
    );
    const options = (this.props.options || []).filter(
      (o) => blacklistedOptions.indexOf(o.value) === -1
    );

    const menuContentTopStyles = menuHelpContentTopBackground
      ? {
          backgroundColor: menuHelpContentTopBackgroundAlpha
            ? Colors.getWithAlpha(
                menuHelpContentTopBackground,
                menuHelpContentTopBackgroundAlpha
              )
            : Colors.get(menuHelpContentTopBackground),
        }
      : {};

    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={itemToString}
        isOpen={this.state.isMenuOpen}
        onOuterClick={this.closeMenu}
        onSelect={this.handleSelect}
        initialInputValue={this.getDefaultInputValue(value as string)}
        {...downshiftProps}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          ...stateAndHelpers
        }) => (
          <div>
            <Root>
              <div>
                <TextField
                  onClick={this.handleClick}
                  inputLabelProps={getLabelProps()}
                  label={label}
                  helperText={helperText}
                  placeholder={placeholder}
                  error={error}
                  value={value}
                  id={id}
                  name={name}
                  autoFocus={autoFocus}
                  {...textFieldProps}
                  inputProps={{
                    ...clearInputProps({
                      ...getInputProps(),
                      ...(textFieldProps && textFieldProps.inputProps),
                    }),
                    autoComplete: 'none',
                    role: 'presentation',
                  }}
                  onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                    /*
                      this call seems to be useless (even harmful), the call cleans the text input even if there is a selected item
                      I decided to comment this out to prevent that unexpected and definitely wrong behavior
                      commenting this out doesn't affect on correct behavior fo Autocomplete component
                      if there is a better solution of the problem, please uncomment this call
                    */
                    // getInputProps().onBlur(event);
                    this.handleBlur(event, {
                      getInputProps,
                      getItemProps,
                      getLabelProps,
                      getMenuProps,
                      isOpen,
                      inputValue,
                      highlightedIndex,
                      selectedItem,
                      ...stateAndHelpers,
                    });
                  }}
                  onInput={this.handleInput}
                  onFocus={this.handleFocus}
                />
              </div>
              {isOpen && (
                <AutocompleteMenu
                  dropdownHeight={dropdownHeight}
                  listProps={{ ...getMenuProps({ refKey: 'innerRef' }) }}
                >
                  {!!menuHelpContentTop && (
                    <React.Fragment>
                      <List.Item style={menuContentTopStyles} button={false}>
                        {menuHelpContentTop}
                      </List.Item>
                    </React.Fragment>
                  )}
                  {!inputValue && !!featuredOptions.length && (
                    <React.Fragment>
                      {featuredOptions.map((item, index) => (
                        <AutocompleteMenuItem
                          key={`selected_${index}`}
                          selected={selectedItem === item}
                          highlighted={highlightedIndex === index}
                          {...getItemProps({
                            key: item.value,
                            index,
                            item,
                          })}
                        >
                          <Typography>{item.label || item.value}</Typography>
                        </AutocompleteMenuItem>
                      ))}
                      <Divider />
                    </React.Fragment>
                  )}
                  {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion*/}
                  {this.currentReducer!(inputValue, options).length > 0 ? (
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    this.currentReducer!(inputValue, options).map(
                      (item, index) => (
                        <AutocompleteMenuItem
                          key={`options_${index}`}
                          selected={selectedItem === item}
                          highlighted={
                            highlightedIndex ===
                            index + (inputValue ? 0 : featuredOptions.length)
                          }
                          {...getItemProps({
                            key: item.value,
                            index:
                              index + (inputValue ? 0 : featuredOptions.length),
                            item,
                          })}
                        >
                          <Typography>{item.label || item.value}</Typography>
                        </AutocompleteMenuItem>
                      )
                    )
                  ) : (
                    <List.Item button={false}>
                      <Typography foreground="primaryGrey">
                        {notFoundLabel}
                      </Typography>
                    </List.Item>
                  )}
                </AutocompleteMenu>
              )}
            </Root>
          </div>
        )}
      </Downshift>
    );
  }
}

export { Autocomplete, AutocompleteProps, AutocompleteOptionType };
