import React from "react";

import { Button, ButtonGroup, ButtonGroupWrapper } from "../../styles/Button";

function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <ButtonGroupWrapper>
      <span>Page</span>
      <ButtonGroup>
        {pages && pages.length > 1
          ? pages.map(i => {
              const page = i + 1;
              return (
                <Button
                  small={true}
                  key={`page_${page}`}
                  disabled={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              );
            })
          : ""}
      </ButtonGroup>
    </ButtonGroupWrapper>
  );
}

export default Pagination;
