import styled, { css, keyframes } from "styled-components";
import { Vars, Device } from "../../styles/Variables";

const fadeInProductBox = keyframes`
  from {
    opacity: 0
  }

  to {
    transform: translateX(0);
    opacity: 1
  }
`;

export const Picture = styled.img`
  width: 80px;
  margin-right: 40px;
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  div {
    margin-bottom: 5px;
    color: ${Vars.color.base.alt};
  }
`;

export const Coin = styled.strong`
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon {
    width: 25px;
    margin-left: 10px;
  }
`;

export const ProductBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 100px;

  box-sizing: border-box;
  padding: 20px 30px;

  margin-bottom: 5px;
  border-bottom: 1px solid ${Vars.color.base.base};
  background-color: ${Vars.color.white};
  border-radius: ${Vars.radius.md};

  transition: box-shadow 0.3s ease-out 0s;
  /* animation: ${fadeInProductBox} 0.5s ease forwards; */

  ${({ index }) =>
    index < 15
      ? css`
          transform: translateX(${(index + 1) * 6}px);
          animation: ${fadeInProductBox} ${(index + 2) / 10}s ease forwards;
        `
      : css`
          transform: translateX(0);
          animation: ${fadeInProductBox} 0.2s ease forwards;
        `}


  @media ${Device.tablet} {
    border-radius: ${Vars.radius.md};
    :hover {
      z-index: 1;
      box-shadow: 0 15px 25px -10px ${Vars.color.base.alt};
    }
  }
`;
