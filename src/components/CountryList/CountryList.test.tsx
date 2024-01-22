import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryList from './CountryList';
import { CountryItem } from '../../api/interfaces/country.interface';
import { BrowserRouter } from 'react-router-dom';

test('renders CountryList component', () => {
  const countries: CountryItem[] = [
    {
      name: "Peru",
      capital: "Lima",
      code: "PE",
      currency: "PEN",
      emoji: "🇵🇪",
      continent: {
        code: "SA",
        name: "South America",
      },
      languages: [
        {
          code: "es",
          name: "Spanish",
          native: "Español",
          rtl: false,
        }
      ],
    }
  ]

  const { rerender } = render(<CountryList countries={countries} />, { wrapper: BrowserRouter });
  const elementFill = screen.getByRole("list");
  expect(elementFill.childNodes.length).toBe(1);

  expect(screen.getByText("🇵🇪 Peru")).toBeInTheDocument();
  expect(screen.getByText("South America (PEN)")).toBeInTheDocument();

  rerender(<CountryList countries={[]} />);
  const elementEmpty = screen.getByRole("list");
  expect(elementEmpty.childNodes.length).toBe(0);
});
