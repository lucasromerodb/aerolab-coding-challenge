import styled, { keyframes } from "styled-components";
import { Button } from "../../styles/Button";

const fadeInGoTop = keyframes`
  to {
    transform: translateY(0)
  }
`;

export const GoTop = styled(Button)`
  position: fixed;
  z-index: 99;
  left: ${window.innerWidth / 2 - 60}px;
  bottom: 10px;

  width: 120px;
  justify-content: center;

  padding: 7px 14px;
  transform: translateY(40px) scaleX(0);

  font-size: 0.8rem;

  animation: ${fadeInGoTop} 0.3s ease 1s forwards;
`;

export const HistoryList = styled.section`
  margin-bottom: 50px;
`;
