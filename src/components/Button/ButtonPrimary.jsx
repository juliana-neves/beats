import styled from "@emotion/styled";

const ButtonPrimary = styled.button`
    height: 40px;
    width: 100%;
    background-color: ${props => props.theme.color.black};
    border-radius: ${props => props.theme.spacing.xs};
    border: none;
    color: ${props => props.theme.color.white};
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.color.details};
        border: none;
    }
`

export default ButtonPrimary;