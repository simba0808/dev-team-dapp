import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';
import {useCallback} from 'react';
import ReactPaginate from 'react-paginate';

import type {FC} from 'react';

const PreviousLabel = () => {
  return (
    <div className='flex items-center justify-center rounded-full w-8 h-8 bg-light-gray cursor-pointer active:bg-medium-gray'>
      <ChevronLeftIcon boxSize={24}/>
    </div>
  );
};

const NextLabel = () => {
  return (
    <div className='flex items-center justify-center rounded-full w-8 h-8 bg-light-gray cursor-pointer active:bg-medium-gray'>
      <ChevronRightIcon boxSize={24}/>
    </div>
  );
};

type Props = {
  currentPage: number;
  pageCount: number;
  onPageChange?: (page: number) => void;
};

const DataTablePaginator: FC<Props> = ({
  currentPage, pageCount, onPageChange
}) => {
  const handlePageClick = useCallback((event: {selected: number}) => {
    onPageChange?.(event.selected);
  }, [onPageChange]);

  return (
    <ReactPaginate
      className='flex justify-end mt-2 gap-1'
      pageLinkClassName='flex items-center justify-center rounded-full min-h-8 min-w-8 px-2 bg-light-gray cursor-pointer active:bg-medium-gray'
      activeLinkClassName='text-white !bg-dark-blue active:!bg-darker-blue'
      breakLinkClassName='flex items-center justify-center rounded-full min-h-8 min-w-8 px-2 bg-light-gray cursor-pointer active:bg-medium-gray'
      previousClassName={currentPage > 0 ? undefined : 'invisible'}
      nextClassName={currentPage < pageCount - 1 ? undefined : 'invisible'}
      breakLabel={null}
      forcePage={pageCount?currentPage:-1}
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={0}
      onPageChange={handlePageClick}
      previousLabel={<PreviousLabel />}
      nextLabel={<NextLabel />}
      renderOnZeroPageCount={null}
    />
  );
};

export default DataTablePaginator;