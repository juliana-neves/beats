import styled from "@emotion/styled";

const StyledLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
`

const StyledInput = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.s};
    background: ${props => props.theme.color.white};
    border: 1px solid;
    border-color: ${props => props.theme.color.greyLight};
    border-radius: ${props => props.theme.spacing.s};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`


export default function Input({ label, placeholder }) {
    return (
        <StyledLabel>
            {label}
            <StyledInput type="text" placeholder={placeholder} />
        </StyledLabel>
    );
}