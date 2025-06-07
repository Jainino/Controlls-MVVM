import { SelectOption } from "../SelectOption/SelectOption";
import { StyledSelectMenu } from "./SelectMenu.styles";
import { SelectMenuProps } from "./SelectMenu.types";

export const SelectMenu = <T,>({
    options,
    optionComponent,
    onClick
}: SelectMenuProps<T>) => {
    if(options.length === 0) return null
    
    return (
        <StyledSelectMenu>
            {options.map((option,i)=>(
                <SelectOption 
                    key={i}
                    optionComponent={optionComponent}
                    option={option}
                    onClick={onClick}
                />
            ))}
        </StyledSelectMenu>
    )
}