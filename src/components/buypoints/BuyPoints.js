import React from "react";
import AeroPay from "../aeropay";
import { Button } from "../../styles/Button";
import coin from "../../assets/coin.svg";
import { BuyBox, BuyButtons, Close } from "./Styles";

function BuyPoints({ onAddPoints, setOpenBuy }) {
  function onAdd(amount) {
    onAddPoints(amount);
    setOpenBuy(false);
  }

  return (
    <BuyBox>
      <AeroPay />
      <BuyButtons>
        <Button small onClick={() => onAdd(1000)}>
          +1000 <img src={coin} alt="Coin icon" className="icon" />
        </Button>
        <Button small onClick={() => onAdd(5000)}>
          +5000 <img src={coin} alt="Coin icon" className="icon" />
        </Button>
        <Button small onClick={() => onAdd(7500)}>
          +7500 <img src={coin} alt="Coin icon" className="icon" />
        </Button>
      </BuyButtons>
      <Close onClick={() => setOpenBuy(false)}>Cancel</Close>
    </BuyBox>
  );
}
export default BuyPoints;
