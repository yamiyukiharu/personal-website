import styled from "styled-components";

export const ScAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  --main-bg-color: #001233;
  --main-color: #979dac;
  --nav-bar-color: rgba(51, 65, 92, 0.95);
  --normal-text-color: #7d8597;
  --primary-color: #0eb1d2;
  --title-color: white;
  --page-border: 1px solid #979dac;

  --nav-bar-height: 60px;
`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
