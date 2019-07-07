import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { Vars, Device } from "../../styles/Variables";
import { RedeemButton } from "../../styles/Button";

const productGap = "20px";

export const ProductPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  overflow: hidden;

  img {
    display: block;
    max-width: 90%;

    border-radius: $radius;
    transition: 0.5s ease 0s;
  }
`;

export const ProductInfo = styled.div`
  position: relative;

  padding: ${productGap};
  border-top: 1px solid ${transparentize(0.7, Vars.color.base.alt)};
`;

export const ProductTitle = styled.h1`
  width: 240px;
  margin: 0;
  margin-top: 5px;

  font-size: 1.2rem;
  font-weight: 400;
  color: ${Vars.color.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductCategory = styled.h2`
  display: block;
  margin: 0;

  font-size: 0.9rem;
  font-weight: 400;
  color: ${Vars.color.base.alt};
`;

export const ProductRdeemed = styled.i`
  position: absolute;
  display: block;
  top: -11px;
  left: 12px;

  padding: 3px 7px;

  background-color: ${Vars.color.white};
  border-radius: 2px;

  font-size: 0.7rem;
  font-weight: 400;
  color: ${Vars.color.base.alt};
  ${({ times }) =>
    times === 0 &&
    css`
      color: ${Vars.color.success};
    `}
`;

export const ProductBox = styled.section`
  width: 100%;

  box-sizing: border-box;
  background-color: ${Vars.color.white};

  transition: 0.3s ease-out 0s;

  ${RedeemButton} {
    margin-top: 15px;
  }

  @media ${Device.mobileS} {
    border-bottom: 1px solid ${transparentize(0.5, Vars.color.base.alt)};
  }

  @media ${Device.tablet} {
    border-radius: ${Vars.radius.md};
    :hover {
      z-index: 1;
      box-shadow: 0 25px 25px -10px ${Vars.color.base.alt};
    }
  }
`;
