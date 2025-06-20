import {ButtonHTMLAttributes} from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    wide?: boolean;
}