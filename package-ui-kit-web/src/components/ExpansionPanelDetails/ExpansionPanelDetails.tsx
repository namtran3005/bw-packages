import * as React from 'react';
import { ExpansionPanelDetails as MuiExpansionPanelDetails } from '@material-ui/core';
import { ExpansionPanelDetailsProps as MuiExpansionPanelDetailsProps } from '@material-ui/core/ExpansionPanelDetails';

const ExpansionPanelDetails: React.FunctionComponent<MuiExpansionPanelDetailsProps> = (
  props
) => <MuiExpansionPanelDetails {...props} />;

export {
  ExpansionPanelDetails,
  MuiExpansionPanelDetailsProps as ExpansionPanelDetailsProps,
};
