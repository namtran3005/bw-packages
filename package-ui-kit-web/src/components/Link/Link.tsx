/* eslint-disable react/no-children-prop */
import React from 'react';
import * as H from 'history';
import styled from 'styled-components';
import { Colors, Transitions } from '@bitwala-cryptobank-squad/package-theme';
import {
  Link as LinkRouterDOM,
  LinkProps as LinkPropsRouterDOM,
} from 'react-router-dom';

type LinkVariants =
  | 'normal'
  | 'darkBackground'
  | 'helperText'
  | 'styleless'
  | 'text'
  | 'subtitleText'
  | 'primaryGrey';

interface LinkProps extends Partial<LinkPropsRouterDOM> {
  to?: H.LocationDescriptor;
  domElement?: keyof React.ReactDOM;
  external?: boolean;
  target?: string;
  variant?: LinkVariants;
}

const LinkComponentWrapper: React.FunctionComponent<LinkProps> = ({
  to: toProp,
  target,
  domElement,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  color,
  children,
  external: externalProp,
  ...cleanProps
}) => {
  if (process.env.REACT_APP_NODE_ENV === 'development' && !toProp) {
    // eslint-disable-next-line no-console
    (console.trace || console.error)(
      "Dear developer, soon we'll make to= attributes be " +
        ' mandatory on all Link component, refactor if possible!'
    );
  }

  const external = !toProp ? true : externalProp;
  const to = !toProp ? 'javascript:void(0);' : toProp;
  if (external) {
    const element = domElement === 'a' || !domElement ? 'a' : domElement;
    return React.createElement(element, {
      ...cleanProps,
      ...(element === 'a' && {
        rel: 'noopener',
        href: to,
        target: target ? target : cleanProps.onClick ? '_self' : '_blank',
      }),
      children,
    });
  } else {
    return (
      <LinkRouterDOM
        to={to as H.LocationDescriptor}
        {...cleanProps}
        {...(domElement && {
          component: (props = {}) =>
            React.createElement(domElement, props, children),
        })}
      >
        {!domElement && children}
      </LinkRouterDOM>
    );
  }
};

const linkColor: Record<LinkVariants, string> = {
  styleless: 'inherit',
  normal: Colors.get('textLink'),
  darkBackground: Colors.get('white'),
  subtitleText: Colors.get('subtitleText'),
  text: Colors.get('text'),
  helperText: Colors.get('text'),
  primaryGrey: Colors.get('primaryGrey'),
};
export const getColor = ({ variant = 'normal' }: LinkProps) =>
  linkColor[variant];

const Link = styled(LinkComponentWrapper)<LinkProps>`
  color: ${getColor};
  opacity: ${({ variant = 'normal' }) =>
    variant === 'darkBackground' ? 0.5 : 1};
  transition: ${Transitions.duration.quick}ms ${Transitions.easing.swiftOut};
  text-decoration: none;
  cursor: ${({ to, onClick }) => (to || onClick ? 'pointer' : 'initial')};
  &:hover {
    opacity: 1;
    text-decoration: ${({ variant = 'normal' }) =>
      variant === 'styleless' ? 'inherit' : 'underline'};
  }
`;

export { Link, LinkProps, LinkVariants };
