import styled, { keyframes } from "styled-components";
import { Vars } from "../../styles/Variables";

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

  a {
    display: block;
    padding: 10px 15px;

    font-size: 1.1rem;
    color: ${Vars.color.black};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;

  button {
    margin-left: 40px;
  }
`;
