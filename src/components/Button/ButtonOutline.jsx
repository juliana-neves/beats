import styled from "@emotion/styled";

const ButtonOutline = styled.button`
    height: 40px;
    width: 100%;
    border: 1px solid;
    background-color: ${props => props.theme.color.white};
    border-color: ${props => props.theme.color.black};
    border-radius: ${props => props.theme.spacing.xs};
    color: ${props => props.theme.color.black};
    cursor: pointer;
`

export default ButtonOutline;