import { InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    wide?: boolean;
    label?: string;
    error?: boolean;
}