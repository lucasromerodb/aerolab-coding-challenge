import styled, { keyframes } from "styled-components";
import { Vars } from "../../styles/Variables";
import bg from "../../assets/featured.jpg";

const commonHeight = 300;

const fadeInFeatured = keyframes`
  to {
    opacity: 1
    transform: translateY(0) rotate(0);
   }
`;

export const FeaturedImg = styled.div`
  background-color: ${Vars.color.white};
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
  flex: 8;
`;

export const FeaturedInfo = styled.section`
  flex: 3;
  box-sizing: border-box;
  padding: 20px 40px;

  background-color: ${Vars.color.white};

  button {
    margin-top: 25px;
  }
`;

export const FeaturedBox = styled.section`
  display: flex;
  flex-direction: row;

  height: ${commonHeight}px;
  margin-bottom: 50px;

  border-radius: ${Vars.radius.md};

  transform-origin: top left;
  transform: translateY(10px) rotate(0.5deg);
  opacity: 0;
  overflow: hidden;

  animation: ${fadeInFeatured} 0.5s ease forwards;
`;
