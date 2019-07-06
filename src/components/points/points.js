import React from "react";
import { PointsButton, BuyMore, Notification, UserPoints } from "./Styles";
import coin from "../../assets/coin.svg";

function Points({ points }) {
  return (
    !!points && (
      <PointsButton small>
        <Notification />
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
