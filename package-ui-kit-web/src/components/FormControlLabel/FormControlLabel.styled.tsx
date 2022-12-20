import * as React from 'react';
import styled from 'styled-components';
import { FormControlLabel } from '@material-ui/core';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';

interface RootProps extends FormControlLabelProps {
  display?: string;
  alignItems?: string;
}

const RootComponent: React.FunctionComponent<RootProps> = ({
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  display,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  alignItems,
  ...cleanProps
}) => <FormControlLabel classes={{ label: 'label' }} {...cleanProps} />;

const Root = styled(RootComponent)`
  &&& {
    display: ${(props) => props.display};
    align-items: ${(props) => props.alignItems};

    .label {
      line-height: initial;
    }
  }
`;

export { Root, RootProps, RootComponent };
