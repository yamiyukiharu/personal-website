import styled from 'styled-components'

export const ScTypewriterContainer = styled.div`
    display: flex;
    column-gap: 5px;
`

export const ScTypewriterText = styled.div`

`

export const ScTypewriterCarret = styled.div`
    width: 20px;
    background-color: var(--main-color);
    animation: blink 1s infinite;

    @keyframes blink {
        from{
            opacity: 0%;
        }
        to{
            opacity: 100%;
        }
    }

`
 
 