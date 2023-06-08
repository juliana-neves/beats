import styled from "@emotion/styled";
import { text, textBold } from "../Typography/Typography";

const LabelSelect = styled.label`
    display: block;
    box-sizing: border-box;
    position: relative;
    ${props => props.theme.fontFamily};
    ${text}
`

const Select = styled.button`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid;
    cursor: pointer;
    justify-content: space-between;
    color: ${props => props.optionSelected ? props.theme.color.grey : props.theme.color.greyLight};
    height: ${props => props.theme.height.m};
    width: ${props => props.theme.width.l};
    font-family ${props => props.theme.fontFamily};
    margin-top: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.xs};
    padding: ${props => props.theme.spacing.s};
    background: ${props => props.theme.color.white};
    border-color: ${props => props.theme.color.greyLight};
    border-radius: ${props =>
        props.isOpen ? '8px 8px 0 0' : props.theme.spacing.xs};
    color: ${props => props.activeFocus ? 'props.theme.color.details' : 'inherit'}
    &:hover {
        border-color: ${props => props.theme.color.grey};
    }
`

const SelectList = styled.ul`
    max-height: 240px;
    min-width: ${props => props.theme.width.l};
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-shadow: 0px 6px 12px rgba(171, 190, 209, 0.3);
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    z-index: 1;
    ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.color.white};
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
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    ${props => props.theme.fontFamily};
    padding: ${props => props.theme.spacing.s};
    ${text}
    width: ${props => props.theme.width.l};
    &:hover {
        background: ${props => props.theme.color.inputHover};
        ${textBold}
    }
`

export { LabelSelect, Select, SelectList, SelectItem }