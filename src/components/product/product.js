import React from "react";

import coin from "../../assets/coin.svg";
import { RedeemButton } from "../../styles/Button.js";
import {
  ProductBox,
  ProductPicture,
  ProductInfo,
  ProductTitle,
  ProductCategory,
  ProductRdeemed
} from "./Styles";

function Product({
  _id,
  name,
  cost,
  category,
  img,
  posting,
  userPoints,
  redeemId,
  redeemedTimes,
  onRequestRedeem
}) {
  return (
    <ProductBox className="Product">
      <ProductPicture>
        <img src={img.url} alt={name} />
      </ProductPicture>
      <ProductInfo className="Product__details">
        <ProductCategory title={category}>{category}</ProductCategory>
        <ProductTitle title={name}>{name}</ProductTitle>
        <ProductRdeemed times={redeemedTimes}>
          {redeemedTimes > 0
            ? redeemedTimes > 1
              ? `Rdeemed ${redeemedTimes} times`
              : `You already have this item`
            : `Never redeemed`}
        </ProductRdeemed>

        {userPoints >= cost ? (
          <RedeemButton
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
          </RedeemButton>
        ) : (
          <RedeemButton small disabled={true}>
            <div>You need</div>
            <div className="price">
              <strong className="cost">{cost - userPoints}</strong>
              <img src={coin} alt="Coin icon" className="icon" />
            </div>
          </RedeemButton>
        )}
      </ProductInfo>
    </ProductBox>
  );
}

export default Product;
