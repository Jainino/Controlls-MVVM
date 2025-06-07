import { makeAutoObservable, runInAction } from 'mobx'
import {CountryInfo, getCountryByName} from '../services/api/apiService'

class InputAutocompliteControlModel {
    query =''
    suggestions: CountryInfo[] = []
    isLoading: boolean = false
    shouldLoadSuggestions: boolean = true
    maxSuggestions: number 

    constructor(maxSuggestions: number = 5){
        makeAutoObservable(this)
        this.maxSuggestions = maxSuggestions
    }

    setQuery = (value: string, shouldLoad: boolean = true) => {
        this.query = value
        this.shouldLoadSuggestions = shouldLoad

        if (value.trim() === "" || !shouldLoad) {
            this.clearSuggestions()
        }
    }
    loadSuggestions = async () => {
        if (this.query.trim() === "" ) {
          runInAction(() => {
            this.clearSuggestions();
            this.isLoading = false;
          });
          return
        }

        runInAction(() => {
          this.isLoading = true;
        });
    
        try {
          const data = await getCountryByName(this.query)
          runInAction(() => {
            this.suggestions = data.slice(0, this.maxSuggestions)
          })
        } catch (error) {
          console.error("Failed to load suggestions:", error)
          runInAction(() => {
            this.clearSuggestions()
          })
        } finally {
          runInAction(() => {
            this.isLoading = false
          })
        }
      }
    
      selectSuggestion = (country: CountryInfo) => {
        this.query = country.name
        this.shouldLoadSuggestions = false
        this.clearSuggestions()
      }
    
      clearSuggestions = () => {
        this.suggestions = []
      }
}

export default InputAutocompliteControlModel