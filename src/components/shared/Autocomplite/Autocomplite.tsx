import { Input } from "../Input/Input";
import { Loader } from "../Loader/Loader";
import { SelectMenu } from "../SelectMenu/SelectMenu";
import { StyledAutocompliteWrapper } from "./Autocomplite.styles";
import { AutocompliteProps } from "./Autocomplite.types";
import { useAutocomplete } from "./useAutocomplite";

export const Autocomplite = <T,>({
    value,
    options,
    onChange,
    onClick,
    optionComponent,
    placeholder,
    isLoading = false,
    maxItems = 10,
    inputProps,
    menuProps
}: AutocompliteProps<T>) => {

    const {
        isOpen,
        wrapperRef,
        filteredOptions,
        handleClick,
        handleInputChange,
        handleInputFocus,
      } = useAutocomplete({
        options,
        onChange,
        onClick,
        maxItems,
      });

    return (
        <StyledAutocompliteWrapper ref={wrapperRef} >
            <Input 
                value={value}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                placeholder={placeholder}
                {...inputProps}
            />
            {isLoading && (
                <Loader aria-label="Загрузка" />
            )}

            {isOpen && !isLoading && (
                <SelectMenu 
                    options={filteredOptions}
                    optionComponent={optionComponent}
                    onClick={handleClick}
                    {...menuProps}
                />
            )} 
        </StyledAutocompliteWrapper>
    )
}