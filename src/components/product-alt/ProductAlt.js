import React from "react";

function ProductAlt({ _id, name, cost, category, img }) {
  return (
    <section>
      {/* <img src={img.url} alt={name} /> */}
      <h1>{name}</h1>
      <span>{_id}</span>
      {/* <small>{_id}</small> */}
      {/* <h2>$ {cost}</h2> */}
    </section>
  );
}

export default ProductAlt;
