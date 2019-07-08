import styled from "styled-components";
import { Vars, Device } from "../../styles/Variables";

export const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-right: 30px;

  li {
    list-style: none;
  }

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

  @media ${Device.mobileS} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${Vars.color.white};
    width: 100%;
  }

  @media ${Device.laptop} {
    position: relative;
    width: auto;
    background-color: transparent;
  }
`;
