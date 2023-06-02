import styled from '@emotion/styled'

const StyleDiv = styled.div`
    padding: ${props => props.theme.spacing.l};
    background: ${props => props.theme.color.white};
    border: 1px solid ${props => props.theme.color.beige};
    border-radius: ${props => props.theme.spacing.s};
`

export default function Card({children}) {

    return (
        <StyleDiv>{children}</StyleDiv>
    );
}