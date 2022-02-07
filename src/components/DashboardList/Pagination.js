import React from 'react';

function Pagination({ totalPosts, postsPerPage, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return <ul style={{ "display": "flex", "gap": "1rem" }}>
        {currentPage > 1 && (
            <li>
                <a onClick={(e) => { e.preventDefault(); paginate(prev => --prev) }} href='!#' style={{ "color": "white" }}>
                    {"<"}
                </a>
            </li>
        )}
        {pageNumbers.map(number => (
            <li key={number} style={{ "padding": "1rem", "listStyleType": "none", "background": `${number === currentPage ? "red" : "purple"}` }}>
                <a onClick={(e) => { e.preventDefault(); paginate(number) }} href='!#' style={{ "color": "white" }}>
                    {number}
                </a>
            </li>
        ))}
        {currentPage !== pageNumbers.length && (
            <li>
                <a onClick={(e) => { e.preventDefault(); paginate(prev => ++prev) }} href='!#' style={{ "color": "white" }}>
                    {">"}
                </a>
            </li>
        )}
    </ul>;
}

export default Pagination;
