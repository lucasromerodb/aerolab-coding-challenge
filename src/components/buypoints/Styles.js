import styled, { keyframes } from "styled-components";
import { transparentize } from "polished";
import { Vars } from "../../styles/Variables";

import { ButtonGroup, Button } from "../../styles/Button";

const openBuyBox = keyframes`
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const BuyBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 15px;
  background-color: ${Vars.color.white};
  border-radius: ${Vars.radius.md};
  box-shadow: 0 25px 25px -10px ${transparentize(0.8, Vars.color.black)};

  opacity: 0;
  transform-origin: top right;
  transform: scale(0);
  animation: ${openBuyBox} 0.2s ease forwards;
`;

export const BuyButtons = styled(ButtonGroup)`
  margin-top: 15px;
  border: 1px solid ${Vars.color.base.base};
  border-radius: ${Vars.radius.md};

  ${Button} {
    background-color: transparent;
  }
`;

export const Close = styled(Button)`
  justify-content: center;

  margin-top: 15px;
  padding: 3px;

  color: ${Vars.color.base.alt};
  text-align: center;

  :hover {
    color: ${Vars.color.black};
  }
`;
