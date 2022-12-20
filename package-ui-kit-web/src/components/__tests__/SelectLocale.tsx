import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectLocale } from '../SelectLocale';

const defaultProps = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  dropdownHeight: 'small' as 'small',
  localeOptions: [
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
    const wrapper = shallow(<SelectLocale {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render submit Autocomplete with preselected options', () => {
    const wrapper = shallow(<SelectLocale {...defaultProps} value="opt2" />);
    expect(wrapper).toMatchSnapshot();
  });
});
