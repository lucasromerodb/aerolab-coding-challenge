import React from "react";

function Points({ points }) {
  return !!points && <span>({points})</span>;
}

export default Points;
