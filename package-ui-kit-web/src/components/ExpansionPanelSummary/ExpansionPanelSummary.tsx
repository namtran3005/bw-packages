import * as React from 'react';
import { ExpansionPanelSummary as MuiExpansionPanelSummary } from '@material-ui/core';
import { ExpansionPanelSummaryProps as MuiExpansionPanelSummaryProps } from '@material-ui/core/ExpansionPanelSummary';

const ExpansionPanelSummary: React.FunctionComponent<MuiExpansionPanelSummaryProps> = (
  props
) => <MuiExpansionPanelSummary {...props} />;

ExpansionPanelSummary.displayName = 'ExpansionPanelSummary';

export {
  ExpansionPanelSummary,
  MuiExpansionPanelSummaryProps as ExpansionPanelSummaryProps,
};
