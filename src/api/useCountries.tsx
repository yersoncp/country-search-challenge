import { gql, useLazyQuery } from "@apollo/client";
import { CountryFilterInput, CountryItem } from "./interfaces/country.interface";

const COUNTRY_QUERY = gql`
  query($filter: CountryFilterInput! ) {
    countries(
      filter: $filter
    ) {
      name,
      capital,
      code,
      currency,
      emoji,
      continent {
        code,
        name,
      },
      languages {
        code,
        name,
        native,
        rtl,
      }
    }
  }
`;

export const useCountries = () => {
  const [countries, { data, loading, error }] = useLazyQuery<{ countries: CountryItem[] }>(COUNTRY_QUERY);

  const getCountries = (filterInput: CountryFilterInput) => {
    countries({
      variables: {
        filter: filterInput
      }
    });
  }

  return {
    getCountries,
    countries: data?.countries || [],
    loading,
    error,
  }
}
