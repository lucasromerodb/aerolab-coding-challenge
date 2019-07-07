import React, { useState, useEffect } from "react";

import { Button, ButtonGroup, ButtonGroupWrapper } from "../../styles/Button";
import { sliceArr, pageNumbers } from "../../utils";

function Pagination({ products, setProds }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const pages = pageNumbers(products, productsPerPage);

  useEffect(() => {
    const sliced = sliceArr(products, currentPage, productsPerPage);
    setProds(sliced);
  }, [products, currentPage, productsPerPage, setProds]);

  return (
    <ButtonGroupWrapper>
      <span>Page</span>
      <ButtonGroup>
        {pages.length > 1
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
