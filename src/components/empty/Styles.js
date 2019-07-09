import styled from "styled-components";
import { Vars } from "../../styles/Variables";

export const EmptyText = styled.strong`
  position: fixed;
  top: 50%;
  left: 50%;

  display: block;
  width: 100%;
  max-width: 60%;
  transform: translate(-50%, -50%);

  color: ${Vars.color.base.alt};
  text-align: center;
`;
