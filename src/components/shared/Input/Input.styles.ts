import styled, { css } from 'styled-components'
import { InputProps } from './Input.types'

export const StyledInput = styled.input<InputProps>`
    background-color: var(--input-bg);
    color: var(--text-color);
    padding: 8px;
    border: 1px solid var(--input-border);
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: var(--accent-color);
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${({ error }) => error && css`
        border-color: var(--error-color);
    `}

    ${({ wide }) => wide && 'width: 100%;'}
`

export const StyledInputWrapper = styled.div<InputProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        font-size: 10px;
    }
`