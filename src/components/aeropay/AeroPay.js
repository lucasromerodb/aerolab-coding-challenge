import React from "react";
import logo from "../../assets/aeropay-logo.svg";
import mastercard from "../../assets/mastercard.svg";

import { Pattern, Name, AeroBadge } from "./Styles";

function AeroPay() {
  return (
    <AeroBadge>
      <Pattern />
      <Name>
        <img src={logo} alt="Aero Pay logo" />
        <span>Aero Pay</span>
      </Name>
      <img src={mastercard} alt="Aero Pay logo" />
    </AeroBadge>
  );
}

export default AeroPay;
