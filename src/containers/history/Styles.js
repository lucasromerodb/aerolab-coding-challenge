import styled, { keyframes } from "styled-components";
import { Button } from "../../styles/Button";
import { Device } from "../../styles/Variables";

const fadeInGoTop = keyframes`
  to {
    transform: translateY(0) scaleX(1);
    opacity: 1;
  }
`;

export const GoTop = styled(Button)`
  position: fixed;
  z-index: 2;
  bottom: 70px;
  left: ${window.innerWidth / 2 - 60}px;

  width: 120px;
  justify-content: center;

  padding: 7px 14px;
  transform: translateY(70px) scaleX(0.8);

  font-size: 0.8rem;

  opacity: 0;
  animation: ${fadeInGoTop} 0.3s ease 1s forwards;

  @media ${Device.tablet} {
    bottom: 15px;
    transform: translateY(45px) scaleX(0.8);
  }
`;

export const HistoryList = styled.section`
  margin-bottom: 50px;
`;
