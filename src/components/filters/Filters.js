import React, { useState, useEffect } from "react";

import { Button, ButtonGroup, ButtonGroupWrapper } from "../../styles/Button";

const sortItems = [
  { by: "time", text: "Most recent" },
  { by: "asc", text: "Lowest price" },
  { by: "desc", text: "Highest price" }
];

function Filters({ sortBy, onSortProducts }) {
  const [sort, setSort] = useState();

  function onSort(e) {
    const id = e.target.id;
    onSortProducts(id);
    setSort(id);
  }

  useEffect(() => {
    setSort(sortBy);
  }, [sortBy]);

  return (
    <ButtonGroupWrapper hideLabels fullGroup>
      <span>Sort by</span>
      <ButtonGroup>
        {sortItems.map(i => (
          <Button
            small
            key={i.by}
            id={i.by}
            primary={sort === i.by}
            disabled={sort === i.by}
            onClick={e => onSort(e)}
          >
            {i.text}
          </Button>
        ))}
      </ButtonGroup>
    </ButtonGroupWrapper>
  );
}
export default Filters;
