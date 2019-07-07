import styled, { keyframes } from "styled-components";
import { Vars } from "../../styles/Variables";

const fadeInNav = keyframes`
  to {
    opacity: 1
  }
`;

export const Nav = styled.nav`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  opacity: 0;

  animation: ${fadeInNav} 0.8s ease 0.3s forwards;
`;

export const NavLinks = styled.ul`
  a {
    display: block;
    padding: 10px 15px;

    font-size: 1.1rem;
    color: ${Vars.color.black};

    transition: color 0.2 ease;

    :hover {
      color: ${Vars.color.primary};
    }
  }

  .itemNav {
    margin-right: 10px;
    background: red;

    :last-child {
      background: blue;
      margin-right: 40px;
    }
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
  padding-top: 40px;
  padding-bottom: 40px;
`;
