import styled, { css } from "styled-components";
import { Device } from "../styles/Variables";

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  width: 100%;

  margin-top: 15px;
  margin-bottom: 10px;



  ${({ single }) =>
    single &&
    css`
      margin-top: 0px;
    `}

  ${({ single }) =>
    !single &&
    css`
      > * {
        @media (max-width: 767px) {
          :first-child {
            margin-bottom: 10px;
          }
        }
      }
    `}


  @media ${Device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: auto;

    margin-top: 30px;
    margin-bottom: 30px;

    ${({ single }) =>
      single &&
      css`
        flex-direction: row;
        justify-content: flex-end;

        margin-top: 0px;
      `}
  }
`;
