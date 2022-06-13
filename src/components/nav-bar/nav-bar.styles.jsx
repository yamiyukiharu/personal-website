import styled from "styled-components";
import { device } from "../../App.styles";

export const ScNavBarContainer = styled.div`
  box-sizing: border-box;
  height: var(--nav-bar-height);
  display: flex;
  padding: 26px 26px 26px 26px;
  align-items: center;
  column-gap: 10px;

  @media ${device.tablet} {
    column-gap: 20px;
  }

  width: 100%;
  background-color: var(--nav-bar-color);
  color: white;
  position: fixed;
  z-index: 5;
  
  div {
    transition: all 0.3s;

    &:hover {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }
`;

export const ScAppName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: auto;
  cursor: pointer;
`;

export const ScSection = styled.div`
  font-size: 12px;

  @media ${device.tablet} {
    font-size: 18px;
  }

  cursor: pointer;
`;
