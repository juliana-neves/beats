import styled from "@emotion/styled";

const LabelSelect = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    position: relative;
`

const Select = styled.button`
    color: ${props => props.optionSelected ? props.theme.color.grey : props.theme.color.greyLight};
    height: 40px;
    width: 100%;
    font-family ${props => props.theme.fontFamily};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-top: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.xs};
    padding: ${props => props.theme.spacing.s};
    background: ${props => props.theme.color.white};
    border: 1px solid;
    border-color: ${props => props.theme.color.greyLight};
    border-radius: ${props =>
        props.isOpen ? '8px 8px 0 0' : props.theme.spacing.xs};
    cursor: pointer;
    justify-content: space-between;
    color: ${props => props.activeFocus ? 'props.theme.color.details' : 'inherit'}
    &:hover {
        border-color: ${props => props.theme.color.grey};
    }
`

const SelectList = styled.ul`
    max-height: 240px;
    width: 100%;
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-shadow: 0px 6px 12px rgba(171, 190, 209, 0.3);
    background-color: ${props => props.theme.color.white};
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    z-index: 1;
    &:last-child {
        border-radius: 0 0 8px 8px;
    }
    &::-webkit-scrollbar {
        width: ${props => props.theme.spacing.xs};
        background-color: ${props => props.theme.color.inputHover};
        border-radius: ${props => props.theme.spacing.s};
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.greyLight};
        border-radius: ${props => props.theme.spacing.s};
    }
`

const SelectItem = styled.li`
    height: auto;
    width: 100%;
    box-sizing: border-box;
    padding: ${props => props.theme.spacing.s};
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.color.inputHover};
        font-weight: 600;
    }
`

export { LabelSelect, Select, SelectList, SelectItem }