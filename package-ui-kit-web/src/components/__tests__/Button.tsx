import * as React from 'react';

import { renderWithTestHarness } from '../../test-utils/test-utils';
import { Button } from '../Button';

const defaultProps = {
  onClick: jest.fn(),
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  background: 'primaryLilac' as 'primaryLilac',
  target: '_blank',
  rel: 'nofollow',
};

describe('Button', () => {
  it('should render button', () => {
    const { baseElement } = renderWithTestHarness(<Button {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render link', () => {
    const newProps = { ...defaultProps, href: 'url' };
    const { baseElement } = renderWithTestHarness(<Button {...newProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render disabled button', () => {
    const { baseElement } = renderWithTestHarness(<Button disabled />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render solid button', () => {
    const { baseElement } = renderWithTestHarness(<Button variant="solid" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render solid disabled button', () => {
    const { baseElement } = renderWithTestHarness(
      <Button variant="solid" disabled />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should render hollow button', () => {
    const { baseElement } = renderWithTestHarness(<Button variant="hollow" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render hollow disabled button', () => {
    const { baseElement } = renderWithTestHarness(
      <Button variant="hollow" disabled />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should render small button', () => {
    const { baseElement } = renderWithTestHarness(<Button size="M" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render large button', () => {
    const { baseElement } = renderWithTestHarness(<Button size="XL" />);
    expect(baseElement).toMatchSnapshot();
  });
});
