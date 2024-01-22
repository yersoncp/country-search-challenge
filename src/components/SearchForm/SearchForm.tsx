import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./SearchForm.module.css";
import useDebounce from "../../hooks/useDebounce";

type SearchFormProps = {
  onSearch: (search: string) => void
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [search, setSearch] = useState<string>();
  const debouncedValue = useDebounce<string | undefined>(search);

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
  };

  useEffect(() => {
    if (debouncedValue !== undefined) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue]);

  return <>
    <div className={s.container}>
      <input
        className={[
          s.search,
        ].join(" ")}
        onChange={handleSearch}
        placeholder="Search"
        type="search"
      />
    </div>
  </>;
};

export default React.memo(SearchForm);
