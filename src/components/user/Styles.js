import styled, { keyframes } from "styled-components";
import { Vars, Device } from "../../styles/Variables";

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

const logoHMobile = 40;
const logoHLaptop = 80;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Vars.color.white};
  border-radius: 40px;

  opacity: 0;
  transform: scale(0.8) rotate(20deg);

  animation: ${fadeInLogo} 0.3s ease-out forwards;

  @media ${Device.mobileS} {
    width: ${logoHMobile}px;
    height: ${logoHMobile}px;
    margin-right: 15px;

    img {
      max-width: 50%;
      transition: transform 0.3s;
    }
  }

  @media ${Device.tablet} {
    width: ${logoHLaptop}px;
    height: ${logoHLaptop}px;
    margin-right: 25px;

    transition: box-shadow 0.3s;

    img {
      max-width: 80%;
    }
  }
`;

export const UserName = styled.h1`
  @media ${Device.mobileS} {
    font-size: 1.2rem;
  }
  @media ${Device.tablet} {
    font-size: 2rem;
  }
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
  min-height: ${logoHLaptop}px;

  :hover {
    @media ${Device.laptop} {
      ${Logo} {
        box-shadow: 0 0 0 5px #fff;
        img {
          transform: scale(0.9);
        }
      }
    }
  }
`;
