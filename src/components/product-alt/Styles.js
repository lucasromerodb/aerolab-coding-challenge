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
  width: 70px;
  margin-right: 15px;
  margin-left: 5px;

  @media ${Device.mobileM} {
    width: 100px;
    margin-right: 250px;
  }

  @media ${Device.tablet} {
    width: 60px;
    margin-right: 20px;
    margin-left: 0;
  }

  @media ${Device.laptop} {
    width: 80px;
    margin-right: 40px;
  }
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${Device.tablet} {
    flex-direction: row;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  font-size: 0.8rem;

  @media ${Device.laptop} {
    font-size: 1rem;
  }

  :nth-child(1) {
    flex: 2;
  }
  :nth-child(2) {
    flex: 3;
  }
  :nth-child(3) {
    flex: 3;
  }

  div {
    margin-bottom: 5px;
    color: ${Vars.color.base.alt};
    @media (max-width: 767px) {
      margin-top: 5px;
      margin-bottom: 0;
      font-size: 0.6rem;
    }
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

  @media (max-width: 767px) {
    position: absolute;
    bottom: 30px;
    left: 20px;

    width: 70px;
    justify-content: center;

    .icon {
      margin-left: 5px;
      width: 17px;
    }
  }
`;

export const ProductBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  min-height: 100px;

  box-sizing: border-box;
  padding: 10px;

  margin-bottom: 5px;
  border-bottom: 1px solid ${Vars.color.base.base};
  background-color: ${Vars.color.white};
  border-radius: ${Vars.radius.md};

  transition: box-shadow 0.3s ease-out 0s;

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
    align-items: center;

    padding: 20px;
    border-radius: ${Vars.radius.md};
    :hover {
      z-index: 1;
      box-shadow: 0 15px 25px -10px ${Vars.color.base.alt};
    }
  }
  @media ${Device.laptop} {
    padding: 20px 30px;
  }
`;
