import styled, { css, keyframes } from "styled-components";
import { transparentize } from "polished";

import { Vars } from "../../styles/Variables";
import { Button } from "../../styles/Button";

const BouncingNotification = keyframes`
  50% {
    transform: scale(0.7)
  }
`;

export const BuyMore = styled.span`
  margin-left: 20px;
  color: ${transparentize(0.8, Vars.color.black)};
`;

export const Notification = styled.span`
  visibility: hidden;
  ${({ points }) =>
    points < 500 &&
    css`
      visibility: visible;
    `}

  position: absolute;
  right: -4px;
  top: -4px;

  display: block;
  width: 15px;
  height: 15px;

  border-radius: 10px;
  background-color: ${Vars.color.secondary};

  animation: ${BouncingNotification} 2s ease infinite;
`;

export const UserPoints = styled.strong`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1.2rem;
`;

export const PointsButton = styled(Button)`
  position: relative;
  display: inline-block;
  width: auto;
  background: ${Vars.color.white};

  .icon {
    width: 25px;
    margin-left: 10px;
  }
`;
