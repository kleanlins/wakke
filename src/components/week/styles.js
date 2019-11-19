import styled from 'styled-components'

export const StyledWeek = styled.div`
    background-color: #000;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    margin: ${props => `${props.size * 0.2}px`};
`