import { SelectItemProps } from "./SelectOption.types"
import { StyledSelectOption } from "./SelectOption.styles";

export const SelectOption = <T,>({
    option,
    optionComponent,
    onClick,
    isSelected = false
}: SelectItemProps<T>) => {
    return (
        <StyledSelectOption onClick={()=>onClick(option)} $isSelected={isSelected}>
            {optionComponent(option)}
        </StyledSelectOption>
    );
};
