import { useMemo } from "react"
import {debounce} from '../../utils/debounce'
import InputAutocompliteControlModel from "../../models/InputAutocompliteControl.model";

export const useInputAutocompleteControl = (
    maxSuggestions: number,
    debounceDelay: number = 500
  ) => {
    const model = useMemo(
      () => new InputAutocompliteControlModel(maxSuggestions),
      [maxSuggestions]
    );
  
    const debouncedLoadSuggestions = useMemo(
      ()=>debounce(() => {model.loadSuggestions()}, debounceDelay),
      [debounceDelay, model]
    );

    const setQuery = (value: string, load = true) => {
      model.setQuery(value, load);

      if (!load || value.trim() === "") return;

      if (value.trim().length === 1) {
        model.loadSuggestions();
      } else {
        debouncedLoadSuggestions();
      }
    };
  
    return {
      query: model.query,
      suggestions: model.suggestions,
      isLoading: model.isLoading,
      setQuery: setQuery,
      selectSuggestion: model.selectSuggestion,
    };
  };