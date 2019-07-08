import styled from "styled-components";
import { transparentize } from "polished";
import { Vars, Device } from "../../styles/Variables";

export const NavLinks = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;

  margin: 0;
  padding: 0;
  margin-right: 30px;

  background-color: ${Vars.color.white};
  box-shadow: 0 -3px 5px ${transparentize(0.8, Vars.color.black)};

  @media ${Device.tablet} {
    position: relative;
    justify-content: flex-start;

    width: auto;
    background-color: transparent;
    box-shadow: none;
  }

  li {
    list-style: none;
    margin: 0;
  }

  a {
    display: block;
    padding: 15px 15px;

    font-size: 0.85rem;
    color: ${Vars.color.black};

    transition: color 0.2 ease;

    :hover {
      color: ${Vars.color.primary};
    }

    @media ${Device.laptop} {
      font-size: 1.1rem;
      padding: 10px 15px;
    }

    .navText {
      display: none;

      @media ${Device.laptop} {
        display: block;
      }
    }

    .navIcon {
      display: block;
      height: 25px;

      padding-left: 20px;
      padding-right: 20px;

      font-size: 1rem;

      @media ${Device.tablet} {
        height: 30px;
        padding-left: 0;
        padding-right: 0;
      }

      @media ${Device.laptop} {
        display: none;
      }
    }
  }
`;
