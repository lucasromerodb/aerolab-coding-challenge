import styled, { keyframes } from "styled-components";

const fadeInLogo = keyframes`
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeInName = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const logoH = 80;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${logoH}px;
  height: ${logoH}px;
  margin-right: 25px;

  background-color: #fff;
  border-radius: 40px;

  opacity: 0;
  transform: scale(0.8) rotate(20deg);

  animation: ${fadeInLogo} 0.3s ease-out forwards;

  img {
    max-width: 80%;
  }
`;

export const UserName = styled.h1`
  opacity: 0;
  transform: translateY(10px);
  font-size: 2rem;
  animation: ${fadeInName} 0.4s ease-out forwards;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: ${logoH}px;
`;
