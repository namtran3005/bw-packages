import * as React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../Table';

const defaultProps = {};
const defaultHeadProps = {};
const defaultBodyProps = {};
const defaultRowProps = {};
const defaultCellProps = {};
const defaultFooterProps = {};
const defaultPaginationProps = {
  colSpan: 10,
  count: 5,
  onChangePage: jest.fn(),
  page: 1,
  rowsPerPage: 2,
};
const defaultSortLabelProps = {};

describe('Table', () => {
  it('should render table', () => {
    const wrapper = shallow(<Table {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table head', () => {
    const wrapper = shallow(<Table.Head {...defaultHeadProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table body', () => {
    const wrapper = shallow(<Table.Body {...defaultBodyProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table row', () => {
    const wrapper = shallow(<Table.Row {...defaultRowProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table cell', () => {
    const wrapper = shallow(<Table.Cell {...defaultCellProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table footer', () => {
    const wrapper = shallow(<Table.Footer {...defaultFooterProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table pagination', () => {
    const wrapper = shallow(<Table.Pagination {...defaultPaginationProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render table sort label', () => {
    const wrapper = shallow(<Table.SortLabel {...defaultSortLabelProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
