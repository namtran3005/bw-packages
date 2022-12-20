import * as React from 'react';
import Downshift, {
  DownshiftProps,
  ControllerStateAndHelpers,
  DownshiftState,
  StateChangeOptions,
} from 'downshift';

import {
  Root,
  AutocompleteMenu,
  AutocompleteMenuItem,
  AutocompleteMenuProps,
} from '../Autocomplete/Autocomplete.styled';
import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { AutocompleteOptionType } from '../Autocomplete';
import { TextField, TextFieldProps } from '../TextField';

interface PhoneNumberFieldProps {
  options: AutocompleteOptionType[];
  downshiftProps?: DownshiftProps<AutocompleteOptionType>;
  dropdownHeight?: AutocompleteMenuProps['dropdownHeight'];
  helperText?: TextFieldProps['helperText'];
  error?: TextFieldProps['error'];
  placeholder?: TextFieldProps['placeholder'];
  value?: string;
  phoneCode?: string;
  autoFocus?: TextFieldProps['autoFocus'];
  handlePhoneCodeChange?: (text: string) => void;
  handlePhoneNumberChange?: (text: string) => void;
  onFocus?: TextFieldProps['onFocus'];
  onClick?: TextFieldProps['onClick'];
  onClear?: TextFieldProps['onInput'];
}

interface PhoneNumberFieldState {
  isMenuOpen: boolean;
  phoneCode: string;
  phoneNumber: string;
  countryCodeList: AutocompleteOptionType[];
}

const countryCodeToNumber = (code: string) => Number(code.replace(/\s|\+/, ''));
const itemToString = (item: AutocompleteOptionType) => (item ? item.value : '');

// Fix for misbehaviour of text field on blur
const clearInputProps = (getInputProps: TextFieldProps['inputProps']) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const { onBlur, ...getInputPropsRest } = getInputProps as any;
  return getInputPropsRest;
};

export const reducer = (
  input: string | null,
  options: AutocompleteOptionType[]
) => {
  if (!input) {
    return options;
  }

  return options
    .filter((item) => item.value.startsWith(input))
    .sort(
      (first, second) =>
        countryCodeToNumber(first.value) - countryCodeToNumber(second.value)
    );
};

export const stateReducer = (
  state: DownshiftState<AutocompleteOptionType>,
  changes: StateChangeOptions<AutocompleteOptionType>
) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.changeInput: {
      const text = changes.inputValue || '';
      const startsWithoutPlus = text.length >= 1 && !text.startsWith('+');
      const reformattedText = startsWithoutPlus ? `+${text}` : text;

      const isValidPhoneCodeInput =
        reformattedText === '' || /^\+[\d]{0,4}$/g.test(reformattedText);
      return {
        ...changes,
        inputValue: isValidPhoneCodeInput ? reformattedText : state.inputValue,
      };
    }
    default: {
      return changes;
    }
  }
};

class PhoneNumberField extends React.Component<
  PhoneNumberFieldProps,
  PhoneNumberFieldState
> {
  public isMenuOpen?: boolean;
  public phoneCode?: string;
  public phoneNumber?: string;

  constructor(props: PhoneNumberFieldProps) {
    super(props);

    this.state = {
      isMenuOpen: false,
      phoneCode: this.props.phoneCode || '',
      phoneNumber: this.props.value || '',
      countryCodeList: this.props.options,
    };
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

  public filterNumberInput = (event: React.ChangeEvent<{ value: string }>) => {
    const phoneNumber = event.target.value;
    if (!phoneNumber || /[\d]/g.test(phoneNumber)) {
      this.setState(
        {
          phoneNumber,
        },
        () => {
          if (this.props.handlePhoneNumberChange) {
            this.props.handlePhoneNumberChange(phoneNumber as string);
          }
        }
      );
    }
  };

  public handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    this.openMenu();
  };

  public handleBlur = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>,
    stateAndHelpers: ControllerStateAndHelpers<AutocompleteOptionType>
  ) => {
    const phoneCode = stateAndHelpers.inputValue || '';
    this.setState({ phoneCode }, () => {
      if (this.props.handlePhoneCodeChange) {
        this.props.handlePhoneCodeChange(phoneCode);
      }
    });
    this.closeMenu();
  };

  public handleInput = (event: React.FormEvent<{ value: string }>) => {
    const text = event.currentTarget.value;
    this.setState({ phoneCode: text });

    if (text.length) {
      this.openMenu();
    }
  };

  public handleChange = (
    selectedItem: AutocompleteOptionType,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    stateAndHelpers: ControllerStateAndHelpers<AutocompleteOptionType>
  ) => {
    const value = selectedItem.value.trim().replace(' ', '');
    this.setState(
      {
        phoneCode: value,
      },
      () => {
        if (this.props.handlePhoneCodeChange) {
          this.props.handlePhoneCodeChange(value);
        }
        this.closeMenu();
      }
    );
  };

  public render(): JSX.Element {
    const {
      downshiftProps,
      helperText,
      error,
      placeholder,
      dropdownHeight,
      options,
    } = this.props;

    return (
      <Downshift
        onChange={this.handleChange}
        itemToString={itemToString}
        isOpen={this.state.isMenuOpen}
        onOuterClick={this.closeMenu}
        onSelect={this.closeMenu}
        stateReducer={stateReducer}
        initialInputValue={this.state.phoneCode}
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
              <Grid container spacing={8} direction="row" justify="flex-start">
                <Grid.Item xs={3} md={2} lg={2}>
                  <TextField
                    id="phoneCode"
                    name="phoneCode"
                    data-test="phoneCode"
                    value={this.state.phoneCode}
                    placeholder="+49"
                    onClick={this.handleClick}
                    inputProps={{
                      ...clearInputProps(getInputProps()),
                      autoComplete: 'off',
                      role: 'presentation',
                      maxLength: 5,
                      onInput: this.handleInput,
                      style: {
                        textAlign: 'center',
                      },
                    }}
                    onBlur={(event) => {
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
                  />
                </Grid.Item>

                <Grid.Item xs={9} md={10} lg={10}>
                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    data-test="phone-number-input"
                    onChange={this.filterNumberInput}
                    value={this.state.phoneNumber}
                    placeholder={placeholder}
                    error={error}
                    helperText={helperText}
                    autoFocus
                    inputProps={{
                      maxLength: 12,
                    }}
                  />
                </Grid.Item>

                {isOpen && reducer(inputValue, options).length > 0 ? (
                  <Grid.Item xs={12}>
                    <AutocompleteMenu
                      dropdownHeight={dropdownHeight}
                      listProps={{ ...getMenuProps() }}
                    >
                      {reducer(inputValue, options).map((item, index) => (
                        <AutocompleteMenuItem
                          key={`phone-options-${index}`}
                          selected={selectedItem === item}
                          highlighted={highlightedIndex === index}
                          {...getItemProps({
                            index,
                            item,
                          })}
                        >
                          <Typography>{item.label || item.value}</Typography>
                        </AutocompleteMenuItem>
                      ))}
                    </AutocompleteMenu>
                  </Grid.Item>
                ) : null}
              </Grid>
            </Root>
          </div>
        )}
      </Downshift>
    );
  }
}

export { PhoneNumberField, PhoneNumberFieldProps };
