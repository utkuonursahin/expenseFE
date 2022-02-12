import React from 'react';

function Pagination({ totalPosts, postsPerPage, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return <ul className='dashboard__pagination'>
        {currentPage > 1 && (
            <li className='dashboard__pagination-item'>
                <a onClick={(e) => { e.preventDefault(); paginate(prev => --prev) }} href='!#' >
                    <svg style={{ "transform": "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" /></svg>
                </a>
            </li>
        )}
        {pageNumbers.map(number => (
            <li className='dashboard__pagination-item' key={number} >
                <a onClick={(e) => { e.preventDefault(); paginate(number) }} style={{ "background": `${number === currentPage ? "#7c5dfa" : "#181f45"}` }} href='!#' >
                    {number}
                </a>
            </li>
        ))}
        {currentPage !== pageNumbers.length && (
            <li className='dashboard__pagination-item'>
                <a onClick={(e) => { e.preventDefault(); paginate(prev => ++prev) }} href='!#' >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" /></svg>
                </a>
            </li>
        )}
    </ul>;
}

export default Pagination;
