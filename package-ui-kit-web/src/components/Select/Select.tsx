import React, { useState } from 'react';
import styled from 'styled-components';
import { Select as MuiSelect } from '@material-ui/core';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import { Colors } from '@bitwala-cryptobank-squad/package-theme';
import { ChevronDown } from '@bitwala-cryptobank-squad/package-icons';

type SelectProps = Omit<MuiSelectProps, 'variant'> & {
  disableUnderline?: boolean;
  isSelectOpen?: boolean;
};

interface SelectIconProps {
  isOpen: boolean;
}

const SelectComponent: React.FunctionComponent<SelectProps> = ({
  disableUnderline = true,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MuiSelect
      disableUnderline={disableUnderline}
      IconComponent={() => <ArrowDownStyled isOpen={isOpen} />}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      style={{
        background: isOpen
          ? Colors.get('white')
          : Colors.getWithAlpha('subtitleText', 0.1),
      }}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        getContentAnchorEl: null,
        PaperProps: {
          elevation: 0,
          style: {
            marginTop: '16px',
          },
        },
      }}
      {...props}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ArrowDownStyled = styled(({ isOpen, ...props }: SelectIconProps) => (
  <span {...props}>
    <ChevronDown />
  </span>
))`
  && {
    display: flex;
    position: absolute;
    right: 3px;
    justify-content: center;
    pointer-events: none;

    svg {
      width: 50%;
      height: 50%;
      margin-top: ${({ isOpen }) => (isOpen ? '-25%' : '25%')};
      transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : '')};
    }
  }
`;

const Select = styled(SelectComponent)`
  && {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    margin: 6px 0px;
    font-family: Inter;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid
      ${({ ...props }) => (props.error ? Colors.get('error') : 'transparent')};
  }

  select {
    padding-left: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    padding-left: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 100%;
  }

  svg {
    opacity: ${({ ...props }) => (props.disabled ? 0.5 : 1)};
  }
`;

export { Select, SelectProps };
