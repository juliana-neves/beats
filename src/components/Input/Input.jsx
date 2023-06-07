import { LabelDropdown, InputDropdown} from './InputStyled';

export default function Input({ label, placeholder }) {
    return (
        <LabelDropdown>
            {label}
            <InputDropdown type="text" placeholder={placeholder} />
        </LabelDropdown>
    );
}