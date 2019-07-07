import React, { useState } from "react";

import { Button, ButtonGroup, ButtonGroupWrapper } from "../../styles/Button";

const sortItems = [
  { by: "time", text: "Most recent" },
  { by: "asc", text: "Lowest price" },
  { by: "desc", text: "Highest price" }
];

function Filters({ onSortProducts }) {
  const [sort, setSort] = useState("time");

  function onSort(e) {
    const id = e.target.id;
    onSortProducts(id);
    setSort(id);
  }

  return (
    <ButtonGroupWrapper>
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
