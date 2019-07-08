import styled, { keyframes } from "styled-components";
import { Vars, Device } from "../../styles/Variables";

const fadeInNav = keyframes`
  to {
    opacity: 1
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  opacity: 0;

  animation: ${fadeInNav} 0.8s ease 0.3s forwards;

  @media ${Device.tablet} {
    position: relative;
  }
`;

export const BuyPointsWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`;

export const Header = styled.header`
  position: relative;
  z-index: 99;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${Device.tablet} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
