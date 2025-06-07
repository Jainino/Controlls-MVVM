import React from "react";

export interface SelectItemProps<T = any> {
    option: T
    onClick: (option: T) => void
    optionComponent: (option: T) => React.ReactNode
    isSelected?: boolean
}