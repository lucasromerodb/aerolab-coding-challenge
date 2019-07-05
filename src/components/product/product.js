import React from "react";

function Product({ _id, name, cost, category, img, posting, userPoints, onRequestRedeem }) {
  return (
    <section>
      <img src={img.url} alt={name} />
      <h1>{name}</h1>
      <small>{_id}</small>
      <h3>{category}</h3>
      {userPoints >= cost ? (
        <h2>$ {cost}</h2>
      ) : (
        <h2>
          You need: {cost - userPoints} ({cost})
        </h2>
      )}
      {userPoints >= cost && (
        <button onClick={() => onRequestRedeem(_id)} disabled={posting}>
          REDEEM NOW
        </button>
      )}
    </section>
  );
}

export default Product;
