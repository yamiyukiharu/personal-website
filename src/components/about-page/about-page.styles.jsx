import styled from "styled-components";
import { device } from "../../App.styles";

export const ScAboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 40px;
  padding-top: 60px;
  padding-bottom: 30px;
  min-height: 500px;

  background-image: linear-gradient(var(--main-bg-color), #023e7d);
  border-bottom: var(--page-border);
`;

export const ScTitle = styled.div`
  align-self: center;
  font-size: 34px;
  color: var(--title-color);
`;

export const ScCards = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
