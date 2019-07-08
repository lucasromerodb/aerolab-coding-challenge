import styled, { keyframes } from "styled-components";
import { Vars, Device } from "../../styles/Variables";
import bg from "../../assets/featured.jpg";

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
  display: block;
  height: 200px;

  @media ${Device.tablet} {
    height: auto;
    flex: 5;
  }

  @media ${Device.laptop} {
    flex: 8;
  }
`;

export const FeaturedInfo = styled.section`
  flex: 3;
  box-sizing: border-box;
  padding: 20px 15px;

  background-color: ${Vars.color.white};

  @media ${Device.tablet} {
    padding: 20px 40px;
  }

  button {
    margin-top: 25px;
  }
`;

export const FeaturedBox = styled.section`
  display: flex;
  flex-direction: column;

  height: 450px;

  border-radius: ${Vars.radius.sm};

  transform-origin: top left;
  transform: translateY(10px) rotate(0.5deg);
  opacity: 0;
  overflow: hidden;

  animation: ${fadeInFeatured} 0.5s ease forwards;

  button {
    border-radius: ${Vars.radius.sm};
  }

  @media ${Device.tablet} {
    flex-direction: row;
    height: 300px;
    border-radius: ${Vars.radius.md};

    button {
      border-radius: ${Vars.radius.md};
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
