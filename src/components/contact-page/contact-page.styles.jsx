import styled from "styled-components";

export const ScContactPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 30px;
    padding: 30px 0px 0px 0px;
    background-color: #023E7D;
    height: 200px;

`
export const ScTitle = styled.div`
    align-self: center;
    font-size: 34px;
    color: white;
`;

export const ScContactIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
`

export const ScIcon = styled.div`
    
    svg {
            height: 30px;
            width: 30px;
            cursor: pointer;
            color: white;
            opacity: 0.6;

            &:hover {
                opacity: 1.0;
            }
        }
`

export const ScSignature = styled.div`
    color: white;
    align-self: center;
`