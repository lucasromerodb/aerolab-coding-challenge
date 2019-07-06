import React from "react";
import coin from "../../assets/coin.svg";
// import "../../styles/buttons.scss";
import { ButtonRedeem } from "../../styles/Button.js";
import "./Product.scss";

function Product({
  _id,
  name,
  cost,
  category,
  img,
  posting,
  userPoints,
  redeemId,
  onRequestRedeem
}) {
  return (
    <section className="Product">
      <div className="Product__picture">
        <img src={img.url} alt={name} />
      </div>
      <div className="Product__details">
        <span className="Product__category" title={category}>
          {category}
        </span>
        <h1 className="Product__name" title={name}>
          {name}
        </h1>

        {userPoints >= cost ? (
          <ButtonRedeem
            primary
            small
            disabled={false}
            posting={posting && redeemId === _id}
            onClick={() => onRequestRedeem(_id)}
          >
            <div>{posting && redeemId === _id ? "Processing..." : "Redeem now"}</div>
            <div className="price">
              <strong className="cost">{cost}</strong>
              <img src={coin} alt="Coin icon" className="icon" />
            </div>
          </ButtonRedeem>
        ) : (
          <ButtonRedeem small disabled={true}>
            <div>You need</div>
            <div className="price">
              <strong className="cost">{cost - userPoints}</strong>
              <img src={coin} alt="Coin icon" className="icon" />
            </div>
          </ButtonRedeem>
        )}
      </div>
    </section>
  );
}

export default Product;
