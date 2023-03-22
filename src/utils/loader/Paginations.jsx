import React from "react";

const Paginations = ({ blogPerPage, totalBlogs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center space-x-1">
          <li>
            {currentPage > 1 ? (
              <div
                onClick={() => paginate(currentPage - 1)}
                className="block px-2 md:px-3 py-1 md:py-2 ml-0 leading-tight text-gray-500 bg-yellow border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-yellow dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  ></path>
                </svg>
              </div>
            ) : null}
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <div
                onClick={() => paginate(number)}
                className={`px-2 md:px-3 py-1 md:py-2 leading-tight border border-white ${
                  number === currentPage ? "bg-red" : "bg-green"
                } cursor-pointer`}
              >
                {number}
              </div>
            </li>
          ))}
          <li>
            {pageNumbers.lastIndexOf ? (
              <div
                onClick={() => paginate(currentPage + 1)}
                className="block px-2 md:px-3 py-1 md:py-2 leading-tight text-gray-500 bg-yellow dark:bg-yellow  border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : null}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Paginations;
