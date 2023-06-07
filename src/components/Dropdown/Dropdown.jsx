import { useState } from "react";
import { LabelSelect, Select, SelectList, SelectItem } from './DropdownStyled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Dropdown({ title, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedOption, setFocusedOption] = useState(null);
    const [optionSelected, setOptionSelected] = useState(null);

    return (
        <LabelSelect htmlFor="">
            {title}
            <Select
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
            >
                {optionSelected ? optionSelected.text : 'Select'}
                {isOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </Select>
            {isOpen &&
                <SelectList>
                    {options.map((option, index) => (<SelectItem
                        key={option.value}
                        activeFocus={index === focusedOption}
                        tabIndex="0"
                        onFocus={() => setFocusedOption(index)}
                        onClick={() => {
                            setOptionSelected(option);
                            setIsOpen(false);
                        }}
                    >
                        {option.text}
                    </SelectItem>))}
                </SelectList>
            }
        </LabelSelect >
    );
}

export default  Dropdown;