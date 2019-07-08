import styled, { css, keyframes } from "styled-components";
import { transparentize } from "polished";

import { Vars, Device } from "../../styles/Variables";
import { Button } from "../../styles/Button";

const BouncingNotification = keyframes`
  50% {
    transform: scale(0.7)
  }
`;

export const BuyMore = styled.span`
  color: ${transparentize(0.8, Vars.color.black)};

  @media ${Device.mobileS} {
    margin-left: 10px;
  }

  @media ${Device.tablet} {
    margin-left: 20px;
  }
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

  @media ${Device.mobileS} {
    font-size: 1rem;
  }

  @media ${Device.laptop} {
    font-size: 1.2rem;
  }
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

  @media ${Device.mobileS} {
    padding: 0.5rem 0.8rem;
    border-radius: ${Vars.radius.sm};
  }

  @media ${Device.tablet} {
    padding: 1rem;
    border-radius: ${Vars.radius.md};
  }
`;
