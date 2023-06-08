import { ButtonPrimary, ButtonOutline } from "./ButtonStyles";
import { TextButton } from "../Typography/Typography";

function Button({ type, children, variant }) {

    if (variant === 'primary') {
        return (
            <ButtonPrimary type={type}>
                {children}
            </ButtonPrimary>
        );
    }
    if (variant === 'outline') {
        return (
            <ButtonOutline>
                <TextButton>
                    {children}
                </TextButton>
            </ButtonOutline>
        );
    }
    return null;

}

export default Button;