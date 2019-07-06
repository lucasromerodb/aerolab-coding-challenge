import styled, { css, keyframes } from "styled-components";
import { transparentize } from "polished";

import { Vars } from "./Variables";

const bouncingButton = keyframes`
  90% { transform: scale(1) }
  95% { transform: scale(0.95) }
  100% { transform: scale(1) }
`;

const bouncingIcon = keyframes`
  0% { transform: scale(1) }
  80% { transform: scale(0.75) }
  95% { transform: scale(1.1) }
`;

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

export const ButtonRedeem = styled(Button)`
  ${({ primary }) =>
    primary &&
    css`
      :hover {
        box-shadow: 0 15px 15px -10px ${transparentize(0.75, Vars.color.primary)};
        animation: ${bouncingButton} 3s ease-in infinite;

        .icon {
          animation: ${bouncingIcon} 1.2s ease-in infinite;
        }
      }
    `}
  ${({ posting }) =>
    posting &&
    css`
      opacity: 0.4;
      cursor: progress;
    `}
    .price {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .cost {
    font-size: 1.2rem;
  }

  .icon {
    width: 25px;
    margin-left: 10px;
  }
`;
