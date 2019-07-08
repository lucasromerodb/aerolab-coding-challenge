import styled, { keyframes } from "styled-components";
import { transparentize } from "polished";
import { Vars, Device } from "../../styles/Variables";

import { ButtonGroup, Button } from "../../styles/Button";

const openBuyBox = keyframes`
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const openBuyBoxMobile = keyframes`
  to {
    transform: translateY(0);
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
  box-shadow: 0 25px 25px -10px ${transparentize(0.8, Vars.color.black)};

  opacity: 0;
  transform-origin: top right;

  @media ${Device.movileS} {
    width: 100vw;
    border-radius: 0 0 ${Vars.radius.md} ${Vars.radius.md};

    transform: translateY(-100%);
    animation: ${openBuyBoxMobile} 0.3s ease forwards;
  }

  @media ${Device.tablet} {
    width: auto;
    border-radius: ${Vars.radius.md};

    transform: scale(0);
    animation: ${openBuyBox} 0.2s ease forwards;
  }
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
