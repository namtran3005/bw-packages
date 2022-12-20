import React from 'react';

import { List as ListComponent, ListProps } from './List';
import {
  ListItem as ListItemComponent,
  ListItemProps,
  ListItemIcon as ListItemIconComponent,
  ListItemIconProps,
} from './ListItem';
import {
  ListSubheader as ListSubeHeaderComponent,
  ListSubheaderProps,
} from './ListSubheader';

function List(props: ListProps) {
  return <ListComponent {...props} />;
}

function ListItem(props: ListItemProps) {
  return <ListItemComponent {...props} />;
}

const ListItemIcon = (props: any) => {
  return <ListItemIconComponent {...props} />;
};

function ListSubheader(props: ListSubheaderProps) {
  return <ListSubeHeaderComponent {...props} />;
}

List.prototype.Subheader = ListSubheader;
List.Subheader = ListSubheader;
ListItem.prototype.Icon = ListItemIcon;
ListItem.Icon = ListItemIcon;
List.prototype.Item = ListItem;
List.Item = ListItem;

export {
  List,
  ListProps,
  ListItem,
  ListItemProps,
  ListItemIcon,
  ListItemIconProps,
};
