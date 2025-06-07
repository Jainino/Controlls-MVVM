import React from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styles'

export const Button = ({
    type = "button",
    wide = false,
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton
            type={type}
            className={className}
            disabled={props.disabled}
            {...props}
        >
            {children}
        </StyledButton>
    )
}