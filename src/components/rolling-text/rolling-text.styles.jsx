import styled from 'styled-components'

export const ScRollingTextContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    animation-name: roll;
    animation-duration: 1s;
    animation-delay: ${({delay}) => `${delay}s`};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
    

    @keyframes roll {
        0% {
            padding-top: 0px;
            padding-bottom: 30px;
            opacity: 0;
        }
        25% {
            padding-top: 0px;
            padding-bottom: 15px;
            opacity: 0.5;
        }
        50% {
            padding-top: 0px;
            padding-bottom: 0px;
            opacity: 1.0;
        }
        75% {
            padding-top: 15px;
            padding-bottom: 0px;
            opacity: 0.5;
        }
        100% {
            padding-top: 30px;
            padding-bottom: 0px;
            opacity: 0;
        }

    }
`;

export const ScFinalTextContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100px;
    animation-name: final-roll;
    animation-duration: 1s;
    animation-delay: ${({delay}) => `${delay}s`};
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

    @keyframes final-roll {
        0% {
            padding-top: 0px;
            padding-bottom: 30px;
            opacity: 0;
        }
        25% {
            padding-top: 0px;
            padding-bottom: 15px;
            opacity: 0.5;
        }
        50% {
            padding-top: 0px;
            padding-bottom: 0px;
            opacity: 1.0;
        }
;`