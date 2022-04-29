import styled from "styled-components";

export const ScSkillCardContainer = styled.div`
    box-sizing: border-box;
    height: 480px;
    width: 300px;
    border: 1px solid #5C677D;
    border-radius: ${({isFirst, isLast}) => {
        if (isFirst) {return('10px 0px 0px 10px')}
        else if (isLast) {return('0px 10px 10px 0px')}
        else {return('0px')}
    }};
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    padding: 30px 15px 20px 15px;
    background-color: rgba(223, 223, 223, 0.5);
    animation-delay: ${({delay}) => `${delay}s`};
    animation-name: roll_card;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
    
    @keyframes roll_card {
        from {
            opacity: 0;
        }
        to {
            opacity: 1.0;
        }
    }


    svg {
        height: 50px;
        width: 50px;
    }
`;

export const ScTitle = styled.div`
    display: flex;
    text-align: center;
    font-size: 22px;
    height: 60px;
    font-weight: bold;
`;

export const ScDescription = styled.div`
    box-sizing: border-box;
    text-align: center;
    font-size: 18px;
    opacity: 0.7;
    padding: 5px;
`;

export const ScSkillIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    padding-top: 40px;
`;

export const ScSkill = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    font-weight: bold;
`;

