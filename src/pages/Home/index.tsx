import React, { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useCountries } from '../../api/useCountries';
import CountryList from '../../components/CountryList/CountryList';
import FilterChecks from '../../components/FilterChecks/FilterChecks';
import { CountryItem } from '../../api/interfaces/country.interface';
import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const { getCountries, countries, loading } = useCountries();
  const [continentOptions, setContinentOptions] = useState<{ label: string, value: string }[]>([]);
  const [currencyOptions, setCurrencyOptions] = useState<{ label: string, value: string }[]>([]);

  const [continentSelected, setContinentSelected] = useState<string[]>([]);
  const [currencySelected, setCurrencySelected] = useState<string[]>([]);
  const [countriesFiltered, setCountriesFiltered] = useState<CountryItem[]>([]);

  const handleSearchCountry = (search: string) => {
    if (!search) {
      return;
    }
    getCountries({
      name: {
        regex: search.charAt(0).toUpperCase() + search.slice(1),
      },
    });
  }

  useEffect(() => {
    getCountries({
      name: {
        regex: ""
      }
    });
  }, []);

  useEffect(() => {
    if (countries?.length) {
      setCountriesFiltered(countries);
      setContinentOptions(
        countries
          .map(country => ({
            label: country.continent.name,
            value: country.continent.code,
          }))
          .filter((item, idx, self) => (
            self.findIndex(s => s.value === item.value) === idx
          ))
      );
      setCurrencyOptions(
        countries
          .map(country => ({
            label: country.currency,
            value: country.currency,
          }))
          .filter(item => item.value)
          .filter((item, idx, self) => (
            self.findIndex(s => s.value === item.value) === idx
          ))
      );
    }
  }, [countries]);

  useEffect(() => {
    setCountriesFiltered(
      countries.filter(c => (
        (continentSelected.length ? continentSelected.includes(c.continent.code) : true) &&
        (currencySelected.length ? currencySelected.includes(c.currency) : true)
      ))
    );

  }, [continentSelected, currencySelected]);

  return <>
    <SearchForm onSearch={handleSearchCountry} />

    {loading ? <Loading /> : (
      <Container>
        <div>
          <FilterChecks
            label="Filter by continent"
            options={continentOptions}
            onSelected={setContinentSelected}
          />

          <FilterChecks
            label="Filter by currency"
            options={currencyOptions}
            onSelected={setCurrencySelected}
          />
        </div>

        <div>
          <h2>
            {countriesFiltered?.length} results found
          </h2>
          <CountryList countries={countriesFiltered} />
        </div>
      </Container>
    )}
  </>;
}

export default Home;
