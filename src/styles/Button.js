import styled, { css } from "styled-components";
import { Vars } from "./Variables";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  box-sizing: border-box;
  padding: 1rem;

  background-color: ${Vars.color.white};
  border-radius: ${Vars.radius.md};
  border: none;

  font-size: 1rem;
  color: ${Vars.color.black};

  cursor: pointer;
  font-family: ${Vars.fontFamily};
  transition: 0.4s ease 0s;

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${Vars.color.primary};
      color: ${Vars.color.white};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${Vars.color.base.alt};
      color: ${Vars.color.white};
      cursor: not-allowed;
    `}

  ${({ small }) =>
    small &&
    css`
      padding: 0.6rem 0.9rem;
      border-radius: ${Vars.radius.sm};
      font-size: 0.9rem;
    `}
`;
