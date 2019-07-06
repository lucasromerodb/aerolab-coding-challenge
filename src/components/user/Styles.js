import styled, { keyframes } from "styled-components";
import { Vars } from "../../styles/Variables";

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

  transition: box-shadow 0.3s;
  animation: ${fadeInLogo} 0.3s ease-out forwards;

  img {
    max-width: 80%;
    transition: transform 0.3s;
  }
`;

export const UserName = styled.h1`
  font-size: 2rem;
  color: ${Vars.color.black};

  opacity: 0;
  transform: translateY(7px);

  animation: ${fadeInName} 0.4s ease-out forwards;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: ${logoH}px;

  :hover {
    ${Logo} {
      box-shadow: 0 0 0 5px #fff;
      img {
        transform: scale(0.9);
      }
    }
  }
`;
