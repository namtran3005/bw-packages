/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Colors, ColorsType } from '@bitwala-cryptobank-squad/package-theme';
import { Link } from '../Link';

interface LogoProps {
  variant?: 'logomark' | 'logotype-vertical';
  foreground?: ColorsType;
  external?: boolean;
  target?: '_self' | '_blank';
  to?: string;
  href?: string;
  logoPosition?: React.CSSProperties['position'];
  size?: 40 | 48;
}

const LogomarkComponent: React.FunctionComponent<LogoProps> = (props) => {
  const textForeground = props.foreground
    ? Colors.getHEX(props.foreground)
    : '#D4D2D2';
  return (
    <svg
      width={props.size || '48'}
      height={props.size || '48'}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.016 0H8.984C4.02227 0 0 4.02227 0 8.984V31.016C0 35.9777 4.02227 40 8.984 40H31.016C35.9777 40 40 35.9777 40 31.016V8.984C40 4.02227 35.9777 0 31.016 0Z"
        fill="#2C232E"
      />
      <path
        d="M17.3018 25.2538C17.3018 23.7098 15.9578 22.5645 14.4138 22.5645H9.03516V31.6311H10.2805V27.9418H13.2378L15.8085 31.6271H17.3018L14.6458 27.9324C16.0898 27.8258 17.3018 26.7191 17.3018 25.2538ZM14.4138 26.7991H10.2805V23.7098H14.4138C15.2605 23.7098 16.0578 24.3071 16.0578 25.2538C16.0578 26.2005 15.2605 26.7991 14.4138 26.7991Z"
        fill={textForeground}
      />
      <path
        d="M22.7305 23.7098H26.2158V30.4818H22.7305V31.6271H30.9971V30.4818H27.5105V23.7098H30.9971V22.5645H22.7305V23.7098Z"
        fill={textForeground}
      />
      <path
        d="M16.0578 16.2884H15.7085L11.3765 8.37109H9.03516V17.4338H10.2805V9.51643H10.6298L14.9618 17.4338H17.3018V8.37109H16.0578V16.2884Z"
        fill={textForeground}
      />
      <path
        d="M29.7518 8.37109V13.6498C29.7518 15.3924 28.6065 16.6871 26.8638 16.6871C25.1211 16.6871 23.9758 15.3924 23.9758 13.6498V8.37109H22.7305V13.6498C22.7305 16.0391 24.4731 17.8324 26.8638 17.8324C29.2545 17.8324 30.9971 16.0391 30.9971 13.6498V8.37109H29.7518Z"
        fill={textForeground}
      />
    </svg>
  );
};

const LogotypeVerticalComponent: React.FunctionComponent = () => (
  <svg
    width="18"
    height="109"
    viewBox="0 0 18 109"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3842 20.3348H17.5748H17.6413V0H14.5836V15.1851L4.47994 0H0.358704V20.3348H3.41639V4.09337L14.3842 20.3348Z"
      fill="#2C232E"
    />
    <path
      d="M8.86705 50.1099C13.3871 50.1099 17.3754 47.337 17.3754 42.1213V29.379H14.3177V42.0553C14.3177 45.4224 11.9912 47.337 8.86705 47.337C5.74289 47.337 3.41639 45.4224 3.41639 42.0553V29.379H0.358704V42.1213C0.358704 47.337 4.34699 50.1099 8.86705 50.1099Z"
      fill="#2C232E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.425175 59.1541H10.7947C14.9824 59.1541 17.5748 61.795 17.5748 65.4923C17.5748 68.6613 15.5142 70.9061 12.1906 71.5003L17.5083 79.4889H13.9189L8.86705 71.6983H3.48286V79.4889H0.358704V59.1541H0.425175ZM3.54933 61.861H10.263C12.7889 61.861 14.4507 63.1155 14.4507 65.4262C14.4507 67.737 12.7889 68.9254 10.263 68.9254H3.54933V61.861Z"
      fill="#2C232E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7801 88.5331H0.358704V91.6362H6.47408V105.897H0.358704V109H15.7801V105.897H9.66471V91.6362H15.7801V88.5331Z"
      fill="#2C232E"
    />
  </svg>
);

const Logomark = styled(LogomarkComponent)``;
const LogotypeVertical = styled(LogotypeVerticalComponent)``;

const LogoComponentWrapper: React.FunctionComponent<LogoProps> = ({
  ...cleanProps
}) =>
  !cleanProps.to ? (
    <span {...cleanProps} />
  ) : (
    <Link {...cleanProps} variant="styleless" />
  );

const LogoComponent = styled(LogoComponentWrapper).withConfig({
  shouldForwardProp: (prop) => !['logoPosition', 'foreground'].includes(prop),
})`
  &&& {
    position: ${({ logoPosition }) =>
      logoPosition ? logoPosition : 'relative'};
    display: inline-block;
    cursor: ${({ to }) => (to ? 'pointer' : 'initial')};
  }
`;

const Logo: React.FunctionComponent<LogoProps> = ({
  variant,
  ...cleanProps
}) => (
  <LogoComponent {...cleanProps}>
    {variant === 'logomark' ? (
      <Logomark {...cleanProps} />
    ) : (
      <LogotypeVertical />
    )}
  </LogoComponent>
);

export { Logo, LogoProps };
