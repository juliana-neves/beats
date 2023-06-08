import styled from "@emotion/styled";

const LabelDropdown = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-weigh: 400;
`

const InputDropdown = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.m};
    background: ${props => props.theme.color.white};
    border: 1px solid;
    border-color: ${props => props.theme.color.greyLight};
    border-radius: ${props => props.theme.spacing.xs};
    height: 40px;
    font-size: 14px;
    font-weigh: 400;
    padding: ${props => props.theme.spacing.s};
    &:hover {
        border-color: ${props => props.theme.color.grey};
    }
`

export { LabelDropdown, InputDropdown };