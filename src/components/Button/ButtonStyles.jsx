import styled from "@emotion/styled";
import { text } from "../Typography/Typography";

const ButtonPrimary = styled.button`
    height: 40px;
    width: 100%;
    border: none;
    cursor: pointer;
    ${text};
    background-color: ${props => props.theme.color.black};
    border-radius: ${props => props.theme.spacing.xs};
    color: ${props => props.theme.color.white};
    &:hover {
        transition: .5s;
        background-color: ${props => props.theme.color.details};
        border: none;
    }
`

const ButtonOutline = styled.button`
    height: 40px;
    width: 100%;
    border: 1px solid;
    ${text};
    background-color: ${props => props.theme.color.white};
    border-color: ${props => props.theme.color.black};
    border-radius: ${props => props.theme.spacing.xs};
    color: ${props => props.theme.color.black};
    cursor: pointer;
`

export { ButtonPrimary, ButtonOutline };