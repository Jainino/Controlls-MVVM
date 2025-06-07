import styled from "styled-components"
import { CountryInfo } from "../../services/api/apiService"

const StyledCountryComponent = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    gap: 12px;

    img{
        display: block;
        width: 30px;
        height: 30px;
        object-fit: contain;
        object-position: center center;
    }
`

interface CountryComponentProps {
    country: CountryInfo
}

export const CountryComponent = ({country}: CountryComponentProps) => {
    return (
        <StyledCountryComponent>
            <img src={country.flag} alt=''/>
            <div>
                <div>{country.name}</div>
                <div>{country.fullName}</div>
            </div>
        </StyledCountryComponent>
    )
}