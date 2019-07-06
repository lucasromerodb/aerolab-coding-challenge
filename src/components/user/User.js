import React from "react";
import { Logo, UserName, UserWrapper } from "./Styles";
import logoSrc from "../../assets/aerolab-logo.svg";

function User({ name }) {
  return (
    <UserWrapper>
      {name && (
        <Logo name={name}>
          <img src={logoSrc} alt={name} />
        </Logo>
      )}
      {name && <UserName>Hi, {name}</UserName>}
    </UserWrapper>
  );
}

export default User;
