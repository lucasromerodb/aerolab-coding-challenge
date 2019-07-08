import styled from "styled-components";
import { Device } from "../styles/Variables";

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;

  @media ${Device.tablet} {
    flex-direction: row;
  }
`;
