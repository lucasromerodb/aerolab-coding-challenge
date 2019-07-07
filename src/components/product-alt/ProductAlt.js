import React from "react";

function ProductAlt({ _id, productId, name, cost, category, img }) {
  return (
    <section>
      {/* <img src={img.url} alt={name} /> */}
      <h1>{name}</h1>
      <span>id: {_id}</span>
      <span>productId: {productId}</span>
      {/* <small>{_id}</small> */}
      {/* <h2>$ {cost}</h2> */}
    </section>
  );
}

export default ProductAlt;
