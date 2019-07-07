import React from "react";
import { RedeemButton } from "../../styles/Button";
import { FeaturedImg, FeaturedInfo, FeaturedBox } from "./Styles";
import coin from "../../assets/coin.svg";

function Featured({ _id, name, cost, posting, userPoints, redeemId, onRequestRedeem }) {
  return (
    <FeaturedBox>
      <FeaturedImg />
      <FeaturedInfo>
        <h1>{name}</h1>
        <h2>Switch + Pokémon</h2>
        <p>
          This week redeem a Nintendo Switch and get a free copy of Pokemon Let's Go Evee or Pikachu
        </p>
        {userPoints >= cost ? (
          <RedeemButton
            primary
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
          <RedeemButton disabled={true}>
            <div>You need</div>
            <div className="price">
              <strong className="cost">{cost - userPoints}</strong>
              <img src={coin} alt="Coin icon" className="icon" />
            </div>
          </RedeemButton>
        )}
      </FeaturedInfo>
    </FeaturedBox>
  );
}

export default Featured;
