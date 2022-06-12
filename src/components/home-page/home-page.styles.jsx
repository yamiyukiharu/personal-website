import styled from "styled-components";
import { device } from "../../App.styles";

export const ScHomePageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0px;

  padding-top: 70px;

  @media ${device.tablet} {
    padding-top: 150px;
    row-gap: 100px;
  }

  height: 100vh;
  min-height: 600px;
  background-color: var(--main-bg-color);
  border-bottom: var(--page-border);
`;

export const ScMainContainer = styled.div`
  display: flex;

  flex-direction: column;
  row-gap: 30px;

  @media ${device.tablet} {
    flex-direction: row;
  }

  justify-content: center;
  align-items: center;
  column-gap: 30px;
  animation: title_appear 1s ease-out forwards;

  @keyframes title_appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ScProfilePic = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;

  @media ${device.tablet} {
    height: 250px;
    width: 250px;
    border-radius: 125px;
  }
`;

export const ScIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 270px;

  @media ${device.tablet} {
    width: 400px;
    align-items: flex-start;
  }
`;

export const ScGreeting = styled.div`
  height: 50px;
  font-size: 30px;
  align-self: center;

  @media ${device.tablet} {
    height: 50px;
    font-size: 50px;
  }

  color: var(--title-color);
`;

export const ScPassionContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  height: 10px;
  font-size: 20px;
  margin-left: 20px;

  @media ${device.tablet} {
    height: 50px;
    font-size: 30px;
  }
`;
export const ScPassionText = styled.div`
  animation: title_appear 1s linear forwards;
  color: var(--normal-text-color);
`;

export const ScPassion = styled.div`
  color: var(--primary-color);
`;

export const ScScrollMessage = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  font-size: 20px;
  color: var(--normal-text-color);
  animation: scroll_msg_appear 1s 5s forwards;
  opacity: 0;
  margin-bottom: 80px;

  @keyframes scroll_msg_appear {
    from {
      margin-top: 0px;
    }
    to {
      opacity: 1;
      margin-top: 50px;
    }
  }

  @media ${device.tablet} {
    @keyframes scroll_msg_appear {
      from {
        margin-top: 0px;
      }
      to {
        opacity: 1;
        margin-top: 100px;
      }
    }
  }
`;
export const ScArrowGifContainer = styled.div`
  .img {
    height: 15px;
    width: 15px;
  }
`;
