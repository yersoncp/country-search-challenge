import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./FilterChecks.module.css";

type FilterChecksProps = {
  label: string;
  options: { label: string, value: string }[];
  onSelected: (values: string[]) => void;
}

const FilterChecks = ({ label, options, onSelected }: FilterChecksProps) => {
  const [optionsSelected, setOptionsSelected] = useState<string[]>([]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const optFound = optionsSelected.find(o => o === evt.target.id);
    if (optFound) {
      setOptionsSelected(optPrev => optPrev.filter(o => o !== evt.target.id));
    } else {
      setOptionsSelected(optPrev => [...optPrev, evt.target.id]);
    }
  }

  useEffect(() => {
    onSelected(optionsSelected);
  }, [optionsSelected]);

  return <>
    <div className={s.container}>
      <label><b>{label}:</b></label>

      {options.map(option => (
        <div key={option.value}>
          <input
            type="checkbox"
            id={option.value}
            name={option.value}
            onChange={handleChange}
          />
          <label htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </>;
};

export default React.memo(FilterChecks);
