import styled from "styled-components";
import { linearGradient } from "polished";
import { Vars } from "../../styles/Variables";
import pattern from "../../assets/aeropay-pattern.svg";

export const Pattern = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: block;
  width: 50%;
  background-image: url(${pattern});
  background-position: center right;
  background-size: cover;
  z-index: 0;
`;

export const Name = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 30px;
    margin-right: 10px;
  }
`;

export const AeroBadge = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 300px;
  height: 60px;

  box-sizing: border-box;
  padding: 15px;
  border-radius: ${Vars.radius.md};
  background-image: url(${pattern});

  color: ${Vars.color.white};
  font-weight: 700;

  overflow: hidden;

  img {
    max-height: 100%;
  }

  img,
  ${Name} {
    z-index: 1;
  }

  ${linearGradient({
    colorStops: [
      `${Vars.color.aeropay.aeropayPrimary} 0%`,
      `${Vars.color.aeropay.aeropaySecondary} 100%`
    ],
    toDirection: "to right",
    fallback: "#FFF"
  })};
`;
export const AeroBadges = styled.div``;
