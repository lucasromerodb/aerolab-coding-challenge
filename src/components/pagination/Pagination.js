import React from "react";

import { Button, ButtonGroup, ButtonGroupWrapper } from "../../styles/Button";

function Pagination({ pages, currentPage, setCurrentPage, currentRef, pageInfo }) {
  function xx(page) {
    setCurrentPage(page);
    if (currentRef) {
      window.scrollTo({
        behavior: "smooth",
        top: currentRef.offsetTop - 15
      });
    }
  }

  return (
    <ButtonGroupWrapper>
      <span>{pageInfo ? pageInfo : "Pages"}</span>
      <ButtonGroup>
        {pages && pages.length > 1
          ? pages.map(i => {
              const page = i + 1;
              return (
                <Button
                  small={true}
                  key={`page_${page}`}
                  disabled={page === currentPage}
                  onClick={() => xx(page)}
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
