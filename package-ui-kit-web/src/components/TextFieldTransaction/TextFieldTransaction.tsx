import React, { MouseEventHandler } from 'react';
import { TextFieldBlockAdornment } from '../TextFieldBlockAdornment';
import { Button } from './Button';

import { TextField, TextFieldProps } from './TextField';

const maxBtnStyle = {
  borderRadius: '50px',
  width: '63px',
  height: '32px',
  minHeight: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '12px !important',
};
const adornmentStyle = {
  backgroundColor: 'transparent',
  borderRadius: '50px',
  width: 'auto',
  height: '37px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export type TextFieldTransactionProps = {
  startAdornmentLabel: string;
  maxButton?: boolean;
  maxButtonOnClick?: MouseEventHandler<HTMLButtonElement>;
  maxButtonDisabled?: boolean;
  maxButtonLabel?: string;
} & TextFieldProps;

export const TextFieldTransaction: React.FC<TextFieldTransactionProps> = ({
  adornmentBlock,
  ...props
}) => {
  return (
    <TextField
      {...props}
      size="large"
      variant="hollow"
      adornmentBlock={adornmentBlock || true}
      startAdornment={
        <TextFieldBlockAdornment foreground="text" style={adornmentStyle}>
          {props.startAdornmentLabel}
        </TextFieldBlockAdornment>
      }
      endAdornment={
        props.maxButton ? (
          <Button
            fontWeight={600}
            variant="solid"
            background="backgroundLight"
            fullWidth={false}
            size="small"
            style={maxBtnStyle}
            onClick={props.maxButtonOnClick}
            disabled={props.maxButtonDisabled}
          >
            {props.maxButtonLabel}
          </Button>
        ) : null
      }
    />
  );
};
