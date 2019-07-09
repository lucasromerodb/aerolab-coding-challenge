import React, { useState } from "react";

import placeholder from "../../assets/placeholder.svg";
import coin from "../../assets/coin.svg";
import { RedeemButton } from "../../styles/Button";
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
  const [imgLow, setImgLow] = useState(placeholder);
  const [imgHigh, setImgHigh] = useState(placeholder);

  function revealImg() {
    setImgLow(img.url);
    setImgHigh(img.hdUrl);
  }

  return (
    <ProductBox className="Product">
      <ProductPicture>
        <img
          src={imgHigh}
          srcSet={`${imgLow} 1024w, ${imgHigh} 3840w`}
          alt={name}
          onLoad={revealImg}
        />
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
