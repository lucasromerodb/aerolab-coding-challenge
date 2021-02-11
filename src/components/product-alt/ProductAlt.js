import React, { useState } from "react";
import moment from "moment";

import placeholder from "../../assets/placeholder.svg";
import coin from "../../assets/coin.svg";
import { ProductBox, Picture, InfoGroup, Group, Coin } from "./Styles";

function ProductAlt({ _id, name, cost, category, img, createDate, index }) {
  const [imgLow, setImgLow] = useState(placeholder);

  function revealImg() {
    setImgLow(img.hdUrl);
  }

  return (
    <ProductBox index={index}>
      <Picture src={imgLow} alt={name} onLoad={revealImg} />
      <Group>
        <InfoGroup>
          <div>{category}</div>
          <span>{name}</span>
        </InfoGroup>
        <InfoGroup>
          <div>Rdeemed on</div>
          <span>{moment(createDate).format("MMMM Do YYYY, h:mm:ss a")}</span>
        </InfoGroup>
        <InfoGroup>
          <div>Transaction ID</div>
          <span>{_id}</span>
        </InfoGroup>
      </Group>
      <Coin>
        {cost} <img src={coin} alt="Coin icon" className="icon" />
      </Coin>
    </ProductBox>
  );
}

export default ProductAlt;
