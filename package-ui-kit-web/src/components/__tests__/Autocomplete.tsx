import * as React from 'react';
import { shallow } from 'enzyme';
import { Autocomplete } from '../Autocomplete';

const defaultProps = {
  id: 'autocomplete_test',
  name: 'autocomplete_test',
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  foreground: 'primaryLilac' as 'primaryLilac',
  notFoundLabel: 'Not found',
  label: 'Autocomplete test',
  placeholder: 'Autocomplete placeholder',
  error: false,
  autoFocus: false,
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  dropdownHeight: 'small' as 'small',
  fullWidth: true,
  helperText: 'Helper text',
  options: [
    {
      value: 'opt1',
      label: 'Option 1',
    },
    {
      value: 'opt2',
      label: 'Option 2',
    },
  ],
};

describe('Autocomplete', () => {
  it('should render submit Autocomplete', () => {
    const wrapper = shallow(<Autocomplete {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render submit Autocomplete with preselected options', () => {
    const wrapper = shallow(<Autocomplete {...defaultProps} value="opt2" />);
    expect(wrapper).toMatchSnapshot();
  });
});
