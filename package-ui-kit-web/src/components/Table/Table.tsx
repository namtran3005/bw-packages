import * as React from 'react';

import { TableBody, TableBodyProps } from '../TableBody';
import { TableCell, TableCellProps } from '../TableCell';
import { TableFooter, TableFooterProps } from '../TableFooter';
import { TableHead, TableHeadProps } from '../TableHead';
import { TablePagination, TablePaginationProps } from '../TablePagination';
import { TableRow, TableRowProps } from '../TableRow';
import { TableSortLabel, TableSortLabelProps } from '../TableSortLabel';
import { Root, RootProps } from './Table.styled';

export {
  RootProps as TableProps,
  TableBody,
  TableBodyProps,
  TableCell,
  TableCellProps,
  TableFooter,
  TableFooterProps,
  TableHead,
  TableHeadProps,
  TablePagination,
  TablePaginationProps,
  TableRow,
  TableRowProps,
  TableSortLabel,
  TableSortLabelProps,
};

export class Table extends React.Component<RootProps> {
  public static Body = TableBody;
  public static Cell = TableCell;
  public static Footer = TableFooter;
  public static Head = TableHead;
  public static Pagination = TablePagination;
  public static Row = TableRow;
  public static SortLabel = TableSortLabel;

  public render(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Root {...(this.props as any)} />;
  }
}
