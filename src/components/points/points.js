import React from "react";
import { PointsButton, BuyMore, Notification, UserPoints } from "./Styles";
import coin from "../../assets/coin.svg";

function Points({ points, setOpenBuy }) {
  return (
    !!points && (
      <PointsButton onClick={() => setOpenBuy(true)}>
        <Notification points={points} />
        <UserPoints>
          {points}
          <img src={coin} alt="Coin icon" srcset="" className="icon" />
          <BuyMore>+</BuyMore>
        </UserPoints>{" "}
      </PointsButton>
    )
  );
}

export default Points;
