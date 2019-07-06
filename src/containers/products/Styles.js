import styled, { keyframes } from "styled-components";
import { Device } from "../../styles/Variables";

const fadeInList = keyframes`
  to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const List = styled.div`
  opacity: 0;
  transform: translateY(10px);
  animation: ${fadeInList} 0.8s ease 0.2s forwards;
`;

export const ProductsList = styled.section`
  display: grid;
  place-items: start;
  margin-bottom: 50px;
  grid-column-gap: 20px;

  @media ${Device.mobileS} {
    grid-template-columns: 1fr;
    grid-row-gap: 0;
  }

  @media ${Device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  }

  @media ${Device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${Device.laptopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
