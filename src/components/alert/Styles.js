import styled, { keyframes } from "styled-components";
import { transparentize } from "polished";
import { Vars, Device } from "../../styles/Variables";

const fadeInAlertBox = keyframes`
  to {
    opacity: 1;
    transform: scale(1) translateX(-50%);
  }
`;

const fadeInAlertBoxMobile = keyframes`
  from {
    transform: translateY(100%);

  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AlertBox = styled.span`
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 55px;

  box-sizing: border-box;
  padding: 10px 10px;

  background-color: ${transparentize(0.1, Vars.color.black)};
  transform-origin: bottom center;

  color: ${Vars.color.warning};
  text-align: center;
  font-size: 0.9rem;

  animation: ${fadeInAlertBoxMobile} 0.3s ease forwards;

  @media ${Device.tablet} {
    left: 50%;
    bottom: 15px;
    width: auto;
    height: auto;

    padding: 15px 20px;
    border-radius: ${Vars.radius.md};
    transform-origin: bottom left;
    transform: scale(0.8) translateX(-50%);

    animation: ${fadeInAlertBox} 0.3s ease forwards;
  }
`;
