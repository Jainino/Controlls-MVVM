import React from "react"
import InputButtonControlModel from "../../models/InputButtonControl.model"


export const useInputButtonControl = (initialValue: string) => {
    const model = React.useMemo(
        () => new InputButtonControlModel(initialValue),
        [initialValue]
    )
    
    return {
        value: model.value,
        onChange: model.setValue
    }
}