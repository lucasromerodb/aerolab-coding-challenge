import styled, { keyframes } from "styled-components";
import { Button } from "../../styles/Button";
import { Device } from "../../styles/Variables";

const fadeInGoTop = keyframes`
  to {
    transform: translateY(0) translateX(-50%) scaleX(1);
    opacity: 1;
  }
`;

export const GoTop = styled(Button)`
  display: inline-block;
  width: auto;
  position: fixed;
  z-index: 2;
  left: 50%;
  bottom: 70px;

  justify-content: center;

  padding: 7px 14px;
  opacity: 0;
  transform-origin: center center;
  transform: translateY(70px) translateX(-50%) scaleX(0.8);

  font-size: 0.8rem;

  animation: ${fadeInGoTop} 0.3s ease 1s forwards;

  @media ${Device.tablet} {
    bottom: 15px;
    transform: translateY(45px) translateX(-50%) scaleX(0.8);
  }
`;

export const HistoryList = styled.section`
  padding-bottom: 30px;
`;
