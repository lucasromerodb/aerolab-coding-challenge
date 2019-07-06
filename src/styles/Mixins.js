import styled from "styled-components";
import { Device } from "./Variables";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;
`;

export const WrapperGap = styled(Wrapper)`
  @media ${Device.mobileS} {
    padding: 0;
  }

  @media ${Device.tablet} {
    padding-left: ${({ gap }) => (gap ? `${gap}px` : 0)};
    padding-right: ${({ gap }) => (gap ? `${gap}px` : 0)};
  }
`;
