import * as React from 'react';
import { ExpansionPanel as MuiExpansionPanel } from '@material-ui/core';
import { ExpansionPanelProps as MuiExpansionPanelProps } from '@material-ui/core/ExpansionPanel';

import {
  ExpansionPanelActions,
  ExpansionPanelActionsProps,
} from '../ExpansionPanelActions';
import {
  ExpansionPanelSummary,
  ExpansionPanelSummaryProps,
} from '../ExpansionPanelSummary';
import {
  ExpansionPanelDetails,
  ExpansionPanelDetailsProps,
} from '../ExpansionPanelDetails';

class ExpansionPanel extends React.Component<MuiExpansionPanelProps> {
  public static Actions = ExpansionPanelActions;
  public static Summary = ExpansionPanelSummary;
  public static Details = ExpansionPanelDetails;

  public render(): JSX.Element {
    return <MuiExpansionPanel {...this.props} />;
  }
}

export {
  ExpansionPanel,
  MuiExpansionPanelProps as ExpansionPanelProps,
  ExpansionPanelActionsProps,
  ExpansionPanelSummaryProps,
  ExpansionPanelDetailsProps,
};
