// tslint:disable no-implicit-dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import Downshift from 'downshift';
import { PhoneNumberField, stateReducer, reducer } from '../PhoneNumberField';

const mockCountyrList = [
  { label: '+49 Germany', value: '+49' },
  { label: '+1 United States', value: '+1' },
];

const mockProps = {
  downshiftProps: { inputId: 'phoneNumbemr' },
  handlePhoneCodeChange: jest.fn(),
  handlePhoneNumberChange: jest.fn(),
  phoneCode: '',
  value: '',
  options: mockCountyrList,
};

const mockDownshiftChanges = {
  type: Downshift.stateChangeTypes.changeInput,
  inputValue: '',
};

const mockDownshiftState = {
  inputValue: '',
};

describe('PhoneNumberField', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<PhoneNumberField {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should prefix plus sign if first input character entered is a number', () => {
    const changes = {
      ...mockDownshiftChanges,
      inputValue: '1',
    };

    expect(stateReducer(mockDownshiftState as any, changes)).toEqual({
      ...changes,
      inputValue: '+1',
    });
  });

  it('should allow plus sign as first character in input', () => {
    const changes = {
      ...mockDownshiftChanges,
      inputValue: '+49',
    };

    expect(stateReducer(mockDownshiftState as any, changes)).toEqual({
      ...changes,
      inputValue: '+49',
    });
  });

  it('should not allow invalid input by reverting to previous valid input', () => {
    const changes = {
      ...mockDownshiftChanges,
      inputValue: '+1#',
    };

    const state = {
      ...mockDownshiftState,
      inputValue: '+1',
    };

    expect(stateReducer(state as any, changes)).toEqual({
      ...changes,
      inputValue: '+1',
    });
  });

  it('should return all lists of options when input is empty', () => {
    expect(reducer('', mockCountyrList)).toEqual(mockCountyrList);
  });

  it('should return list of only countries starting with the value in the input', () => {
    expect(reducer('+1', mockCountyrList)).toEqual([
      { label: '+1 United States', value: '+1' },
    ]);
  });

  it('should return empty list if country code input is not valid', () => {
    expect(reducer('+123', mockCountyrList)).toEqual([]);
  });
});
