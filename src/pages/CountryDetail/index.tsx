import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCountries } from '../../api/useCountries';
import Loading from '../../components/Loading/Loading';

const CountryDetail = () => {
  const params = useParams();
  const { getCountries, countries, loading } = useCountries();

  useEffect(() => {
    if (params?.id) {
      getCountries({
        code: {
          eq: params.id
        }
      });
    }
  }, []);

  if (loading || !countries?.length) {
    return <Loading />;
  }

  return <>
    <h2>
      {countries[0].emoji} {countries[0].name}
    </h2>
    <ul>
      <li>
        <b>Code:</b> {countries[0].code}
      </li>
      <li>
        <b>Name:</b> {countries[0].name}
      </li>
      <li>
        <b>Currency:</b> {countries[0].currency}
      </li>
      <li>
        <b>Continent:</b> {countries[0].continent?.name} ({countries[0].continent?.code})
      </li>
      <li>
        <b>Languages:</b>
        <ul>
          {countries[0].languages.map(ln => (
            <li>{ln.name} ({ln.code})</li>
          ))}
        </ul>
      </li>
      <li>
        <b>Capital:</b> {countries[0].capital}
      </li>
    </ul>
  </>;
}

export default CountryDetail;
