export interface InputButtonControlProps {
    initialValue?: string;
    buttons?: ButtonConfig[]
}

export interface ButtonConfig {
    text: string
    position: 'left' | 'right'
    callback: (value:string, setValue: (value: string) => void) => void
}