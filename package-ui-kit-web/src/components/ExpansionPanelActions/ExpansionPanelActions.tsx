import * as React from 'react';
import { ExpansionPanelActions as MuiExpansionPanelActions } from '@material-ui/core';
import { ExpansionPanelActionsProps as MuiExpansionPanelActionsProps } from '@material-ui/core/ExpansionPanelActions';

const ExpansionPanelActions: React.FunctionComponent<MuiExpansionPanelActionsProps> = (
  props
) => <MuiExpansionPanelActions {...props} />;

export {
  ExpansionPanelActions,
  MuiExpansionPanelActionsProps as ExpansionPanelActionsProps,
};
