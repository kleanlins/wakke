import styled from 'styled-components'

export const StyledWeek = styled.div`
    background-color: #0088;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    margin: ${props => `${props.size * 0.2}px`};
`

export const Active = styled.div`
    position: center;
    width: ${props => `${props.size * 0.8}px`};
    height: ${props => `${props.size * 0.8}px`};
    background-color: white;
    top: 25%;
    left: 25%;
`
