import styled from "@emotion/styled";
import { useState } from "react";

const StyledLabelSelect = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    position: relative;
`

const StyledSelect = styled.button`
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

const StyledSelectUl = styled.ul`
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

const StyledSelectLi = styled.li`
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


export default function Dropdown({ title, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedOption, setFocusedOption] = useState(null);
    const [optionSelected, setOptionSelected] = useState(null);

    return (
        <StyledLabelSelect htmlFor="">
            {title}
            <StyledSelect
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
            >
                {optionSelected ? optionSelected.text : 'Select'}
                {isOpen ?
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="#33363F" strokeWidth="2" />
                        </svg>
                    </span>
                    :
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#33363F" strokeWidth="2" />
                        </svg>
                    </span>
                }
            </StyledSelect>
            {isOpen &&
                <StyledSelectUl>
                    {options.map((option, index) => (<StyledSelectLi
                        key={option.value}
                        activeFocus={index === focusedOption}
                        tabIndex="0"
                        onFocus={() => setFocusedOption(index)}
                        onClick={() => {
                            setOptionSelected(option);
                            setIsOpen(false);
                        }
                        }
                    >
                        {option.text}
                    </StyledSelectLi>))}
                </StyledSelectUl>
            }
        </StyledLabelSelect >
    );
}