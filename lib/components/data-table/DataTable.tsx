import {useMemo, useRef, useState} from 'react';
import DataGrid from 'react-data-grid';
import {TriangleDownIcon, TriangleUpIcon, UpDownIcon} from '@chakra-ui/icons';
import {twMerge} from 'tailwind-merge';

import DataTablePaginator from '@/lib/components/data-table/DataTablePaginator';
import './data-table.scss';
import 'react-data-grid/lib/styles.css';

import type {FC, ReactNode} from 'react';
import type {DataGridHandle, DataGridProps, RenderSortStatusProps, SortColumn} from 'react-data-grid';

export type DataTableProps<T> = CombineProps<DataGridProps<T>, {
  initialSortColumns?: SortColumn[];
  EmptyFallback?: ReactNode;
  isFetching?: boolean;
  currentPage: number;
  rowsTotal: number;
  rowsPerPage?: number;
  sortCompare?: (args: {a: T; b: T; sortColumn: SortColumn}) => number;
  onPageChange?: (page: number) => void;
}>

const SortStatus: FC<RenderSortStatusProps> = (props) => {
  if (!props.sortDirection) {
    return <UpDownIcon />;
  }
  if (props.sortDirection === 'ASC') {
    return <TriangleUpIcon />;
  }
  if(props.sortDirection === 'DESC') {
    return <TriangleDownIcon />;
  }

  return null;
};

const DataTable = <T, >(props: DataTableProps<T>) => {
  const {
    currentPage,
    rowsPerPage = 20,
    rows,
    rowsTotal,
    isFetching,
    EmptyFallback,
    sortCompare,
    onPageChange,
    renderers,
    ...rest
  } = props;

  const gridRef = useRef<DataGridHandle>(null);

  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>(props.initialSortColumns ?? []);

  const sortedRows = useMemo(() => {
    if (sortColumns.length === 0) {
      return rows;
    }

    return [...rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const compareResult = sortCompare?.({a, b, sortColumn: sort}) || 0;
        if (compareResult !== 0) {
          return sort.direction === 'ASC' ? compareResult : -compareResult;
        }
      }
      return 0;
    });
  }, [rows, sortColumns]);

  const pageCount = Math.ceil(rowsTotal / rowsPerPage);

  const isEmpty = !rows.length;

  return (
    <div className='w-full grid'>
      <DataGrid
        className={twMerge(
          'rdg-light w-full text-center text-md lg:text-lg text-white border-[1px] rounded-2xl bg-transparent backdrop-blur-sm',
          (isEmpty || isFetching) && 'rounded-b-none rdg-empty'
        )
        }
        ref={gridRef}
        rows={sortedRows}
        enableVirtualization={false}
        renderers={{
          renderSortStatus: SortStatus,
          ...renderers,
        }}
        sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns}
        {...rest}
      />
      {
        isEmpty && !isFetching &&
        <div className='flex flex-col justify-center items-center bg-transparent min-h-[315px] rounded-b-2xl'>
          {EmptyFallback}
        </div>
      }
      <DataTablePaginator
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
    </div>
  );

};

export default DataTable;