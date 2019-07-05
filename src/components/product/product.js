import React from "react";
import coin from "../../assets/coin.svg";
import "../../styles/buttons.scss";
import "./Product.scss";

function Product({ _id, name, cost, category, img, posting, userPoints, onRequestRedeem }) {
  return (
    <section className="Product">
      <div className="Product__picture">
        <img src={img.url} alt={name} />
      </div>
      <div className="Product__details">
        <span className="Product__category">{category}</span>
        <h1 className="Product__name">{name}</h1>
        {userPoints >= cost ? (
          <button
            className="btn btn--sm btn--primary"
            onClick={() => onRequestRedeem(_id)}
            disabled={posting}
          >
            <span className="btn__text">Redeem now</span>
            <div className="btn__cost">
              <strong className="btn__cost_number">{cost}</strong>
              <img src={coin} className="btn__cost_coin" alt="Coin icon" />
            </div>
          </button>
        ) : (
          <button className="btn btn--sm btn--disabled" disabled={true}>
            <span className="btn__text">You need</span>
            <div className="btn__cost">
              <strong className="btn__cost_number">{cost - userPoints}</strong>
              <img src={coin} className="btn__cost_coin" alt="Coin icon" />
            </div>
          </button>
        )}
      </div>
    </section>
  );
}

export default Product;
