import styled from 'styled-components';

export const ScProjectCardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    column-gap: 10px;

`;

export const ScImagePreview = styled.img`
    height: 400px;
    width: 600px;
    border-radius: 5px;
`

export const ScTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: white;
`

export const ScContent = styled.div`
    box-sizing: border-box;
    background-color: rgba(151, 157, 172, 0.3);
    border-radius: 10px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    row-gap: 20px;
    font-size: 12px;
    color: #121212;
    
`

export const ScButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
`;

export const ScButton = styled.div`
    height: 40px;
    width: 100px;
    font-size: 14px;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #0466C8;
    transition: transform 0.2s;
    opacity: 0.9;
    cursor: pointer;

    &:hover {
        opacity: 1.0;
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1.0);
    }

    a {
        text-decoration: none;
        color: white;
    }
`;





