import { InputProps } from "../Input/Input.types"
import { SelectMenuProps } from "../SelectMenu/SelectMenu.types"

export interface AutocompliteProps<T> {
    value: string
    options: T[]
    optionComponent: (option: T) => React.ReactNode
    onChange: (value: string) => void
    onClick: (option: T) => void
    placeholder?: string
    isLoading?: boolean
    maxItems?: number
    inputProps?: Omit<InputProps, 'value' | 'onChange' | 'onFocus'>
    menuProps?: Omit<SelectMenuProps<T>, 'options' | 'onClick'>
}