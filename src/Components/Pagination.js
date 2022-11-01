import React from 'react';
import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

const Pagination = ({ lastPage, currentPage, pageNavigation, setCurrentPage }) => {

  pageNavigation = (event) => {
    if (currentPage + Number(event.currentTarget.value) <= 0) setCurrentPage(1);
    else if (currentPage + Number(event.currentTarget.value) > lastPage) setCurrentPage(lastPage);
    else setCurrentPage(currentPage + Number(event.currentTarget.value));
  }

  return (
    <div className='btnNavigation'>
      <button onClick={() => setCurrentPage(1)}>Page 1</button>
      <button onClick={pageNavigation} value={-10}><FiChevronsLeft /></button>
      <button onClick={pageNavigation} value={-1}><FiChevronLeft /></button>
      <button>Current Page: {currentPage}</button>
      <button onClick={pageNavigation} value={1}><FiChevronRight /></button>
      <button onClick={pageNavigation} value={10}><FiChevronsRight /></button>
      <button onClick={() => setCurrentPage(lastPage)}>Page {lastPage}</button>
    </div>
  );
}

export default Pagination;
