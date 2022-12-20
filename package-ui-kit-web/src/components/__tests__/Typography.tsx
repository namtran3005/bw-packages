import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Typography } from '../../components/Typography/';

const defaultProps = {};

describe('Typography', () => {
  it('should render styled text', () => {
    const { baseElement } = renderWithTestHarness(
      <Typography {...defaultProps} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should render styled typography with foreground', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Header4 foreground="primaryLilac" {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render styled typography with foreground and alpha', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Header4
        foreground="primaryLilac"
        foregroundAlpha={0.5}
        {...defaultProps}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render aligned typography components', () => {
    expect(
      renderWithTestHarness(
        <Typography.Header4 {...defaultProps} textAlign="left" />
      )
    ).toMatchSnapshot();
    expect(
      renderWithTestHarness(
        <Typography.Header3 {...defaultProps} textAlign="left" />
      )
    ).toMatchSnapshot();
    expect(
      renderWithTestHarness(
        <Typography.Header4 {...defaultProps} textAlign="left" />
      )
    ).toMatchSnapshot();
    expect(
      renderWithTestHarness(
        <Typography.Header4 {...defaultProps} textAlign="left" />
      )
    ).toMatchSnapshot();
    expect(
      renderWithTestHarness(
        <Typography.Subtitle {...defaultProps} textAlign="left" />
      )
    ).toMatchSnapshot();
    expect(
      renderWithTestHarness(
        <Typography.Body {...defaultProps} textAlign="left" />
      )
    ).toMatchSnapshot();

    expect(
      renderWithTestHarness(
        <Typography.Caption {...defaultProps} textAlign="left" />
      )
    ).toMatchSnapshot();
  });
  it('should render typography Typography.Header4', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Header4 {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render typography Header3', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Header3 {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render typography Header4', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Header4 {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render typography Subtitle', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Subtitle {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render typography Body', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Body {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render typography Caption', () => {
    const wrapper = renderWithTestHarness(
      <Typography.Caption {...defaultProps} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
