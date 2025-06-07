import { observer } from "mobx-react-lite"
import { InputAutocompliteControlProps } from "./InputAutocompliteControl.types"
import { Autocomplite } from "../shared/"
import { useInputAutocompleteControl } from "./useInputAutocompleteControl"
import { CountryInfo } from "../../services/api/apiService"
import { CountryComponent } from "./CountryComponent"

export const InputAutocompliteControl = observer(
    ({
        maxSuggestions = 5,
        placeholder = "Ищем страну"
    }:InputAutocompliteControlProps) => {
        const {query, suggestions, isLoading, setQuery, selectSuggestion} = useInputAutocompleteControl(maxSuggestions)
        
        return (
            <Autocomplite<CountryInfo>
                value={query}
                options={suggestions}
                optionComponent={(country) => <CountryComponent country={country} />}
                onChange={setQuery}
                onClick={selectSuggestion}
                placeholder={placeholder}
                isLoading={isLoading}
                maxItems={maxSuggestions}
            />
        )
    }
)

