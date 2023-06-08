import styled from "@emotion/styled";

const ButtonPrimary = styled.button`
    height: 40px;
    width: 100%;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weigh: 400;
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
    font-size: 14px;
    font-weigh: 400;
    background-color: ${props => props.theme.color.white};
    border-color: ${props => props.theme.color.black};
    border-radius: ${props => props.theme.spacing.xs};
    color: ${props => props.theme.color.black};
    cursor: pointer;
`

export { ButtonPrimary, ButtonOutline };