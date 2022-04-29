import styled from "styled-components";

export const ScAboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 40px;
    padding-top: 60px;
    height: 700px;
    background-image: linear-gradient(var(--main-bg-color), #023E7D);
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
`;