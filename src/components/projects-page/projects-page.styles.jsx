import styled from "styled-components";
import { device } from "../../App.styles";

export const ScProjectsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 40px;
    padding: 60px 10px 20px 10px;

    @media ${device.tablet} {
        padding: 60px 50px 20px 50px;

    }

    background-color: var(--main-bg-color);

`;

export const ScTitle = styled.div`
    align-self: center;
    font-size: 34px;
    color: var(--title-color);
`;

export const ScCards = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

`