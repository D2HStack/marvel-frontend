import React from "react";

function Pagination({
  offset,
  setOffset,
  total,
  limit,
  isLoading,
  setIsLoading,
  startPage,
  setStartPage
}) {
  const maxPages = 20;
  const numPages = Math.ceil(total / limit);
  console.log("numPages", numPages);
  console.log("startPage", startPage);
  console.log("offset", offset);

  const createPaginationTable = count => {
    let tab = [];
    for (let i = startPage; i <= startPage + count - 1; i++) {
      tab.push(
        <span
          key={i}
          className="pagination-item"
          onClick={() => {
            if (offset !== limit * (i - 1)) {
              setOffset(limit * (i - 1));
              setIsLoading(true);
            }
          }}
        >
          {i}
        </span>
      );
    }
    return tab;
  };

  return (
    <>
      <div className="pagination-container">
        {startPage < maxPages ? (
          ""
        ) : (
          <span
            className="pagination-item"
            onClick={() => {
              setStartPage(startPage - maxPages);
            }}
          >
            &#60;
          </span>
        )}
        {createPaginationTable(Math.min(maxPages, numPages - startPage + 1))}
        {numPages - startPage < maxPages ? (
          ""
        ) : (
          <span
            className="pagination-item"
            onClick={() => {
              setStartPage(startPage + maxPages);
            }}
          >
            &#62;
          </span>
        )}
      </div>
    </>
  );
}
export default Pagination;
