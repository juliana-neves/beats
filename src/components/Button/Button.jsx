import ButtonPrimary from "./ButtonPrimary";
import ButtonOutline from "./ButtonOutline";

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
                {children}
            </ButtonOutline>
        );
    } 
    return null;

}

export default Button;