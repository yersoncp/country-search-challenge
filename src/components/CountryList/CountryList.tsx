import React from "react";
import s from "./CountryList.module.css";
import { CountryItem } from "../../api/interfaces/country.interface";
import { Link } from "react-router-dom";

type CountryListProps = {
  countries: CountryItem[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return <>
    <ul className={s.listContainer}>
      {countries?.map(country => (
        <li key={country.code}>
          <Link className={s.listItem} to={`/${country.code}`}>
            <h3 className={s.heading}>
              {country.emoji} {country.name}
            </h3>
            <div className={s.description}>
              {country.continent.name} ({country.currency})
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </>;
}

export default CountryList;