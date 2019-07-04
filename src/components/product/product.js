import React from "react";

function Product({ _id, name, cost, category, img, onRequestRedeem }) {
  return (
    <section>
      <img src={img.url} alt={name} />
      <h1>{name}</h1>
      <small>{_id}</small>
      <h2>$ {cost}</h2>
      <h3>{category}</h3>
      <button onClick={() => onRequestRedeem(_id)}>Redeem</button>
    </section>
  );
}

export default Product;
