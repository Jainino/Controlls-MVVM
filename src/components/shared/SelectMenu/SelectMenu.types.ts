import React from "react"

export interface SelectMenuProps<T> {
    options: T[]
    optionComponent: (option: T) => React.ReactNode
    onClick: (value: T) => void
}