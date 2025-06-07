import styled from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonProps>`
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    padding: 8px 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #388e3c;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${({ wide }) => wide && 'width: 100%;'}
`