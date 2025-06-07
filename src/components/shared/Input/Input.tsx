import { InputProps } from "./Input.types"
import { StyledInput, StyledInputWrapper } from "./Input.styles"

export const Input = ({
    className,
    wide = false,
    error = false,
    label,
    ...props
}: InputProps) => {
    return (
        <StyledInputWrapper className={className}>
            {label && <label>{label}</label>}
            <StyledInput
                {...props}
            />
        </StyledInputWrapper>
    )
}