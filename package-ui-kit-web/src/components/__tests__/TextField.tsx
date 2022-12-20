import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { TextField } from '../TextField';

const defaultProps = {
  label: 'Label text',
  placeholder: 'Placeholder text',
  helperText: 'Helper text',
  name: 'name',
};

const propsWithLabelForeground = {
  ...defaultProps,
  labelForeground: 'success' as const,
};

const propsMultiline = {
  ...defaultProps,
  multiline: true,
};

const propsMultilineWithForeground = {
  ...propsMultiline,

  foreground: 'success' as const,
};

const propsMultilineWithError = {
  ...propsMultiline,
  error: true,
};

const propsMultilineWithErrorAndForeground = {
  ...propsMultiline,
  error: true,
  foreground: 'success' as const,
  inputForeground: 'success' as const,
  labelForeground: 'success' as const,
};

const propsSmall = {
  ...defaultProps,
  size: 'small' as const,
};

const propsLarge = {
  ...defaultProps,
  size: 'large' as const,
};

const propsHollow = {
  ...defaultProps,
  variant: 'hollow' as const,
};

const propsHollowLarge = {
  ...propsHollow,
  size: 'large' as const,
};

const propsHollowWithError = {
  ...propsHollow,
  error: true,
};

describe('TextField', () => {
  it('should render text field', () => {
    const { baseElement } = renderWithTestHarness(
      <TextField {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render text field with start adornment', () => {
    const { baseElement } = renderWithTestHarness(
      <TextField startAdornment="€" {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render text field with end adornment', () => {
    const { baseElement } = renderWithTestHarness(
      <TextField endAdornment="€" {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render text field as a select', () => {
    const { baseElement } = renderWithTestHarness(
      <TextField select {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('should render text field with label foreground', () => {
    const wrapper = renderWithTestHarness(
      <TextField {...propsWithLabelForeground} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field small', () => {
    const wrapper = renderWithTestHarness(<TextField {...propsSmall} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field large', () => {
    const wrapper = renderWithTestHarness(<TextField {...propsLarge} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field hollow', () => {
    const wrapper = renderWithTestHarness(<TextField {...propsHollow} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field hollow large', () => {
    const wrapper = renderWithTestHarness(<TextField {...propsHollowLarge} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field hollow with error', () => {
    const wrapper = renderWithTestHarness(
      <TextField {...propsHollowWithError} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field multiline', () => {
    const wrapper = renderWithTestHarness(<TextField {...propsMultiline} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field multiline with foreground', () => {
    const wrapper = renderWithTestHarness(
      <TextField {...propsMultilineWithForeground} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field multiline with error', () => {
    const wrapper = renderWithTestHarness(
      <TextField {...propsMultilineWithError} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field multiline with error and foreground', () => {
    const wrapper = renderWithTestHarness(
      <TextField {...propsMultilineWithErrorAndForeground} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text field component', () => {
    const wrapper = renderWithTestHarness(
      <TextField {...propsMultilineWithError} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
