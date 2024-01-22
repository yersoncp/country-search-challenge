import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('renders loading component', () => {
  render(<Loading />)

  const childrenElement = screen.getByText("Searching...");
  expect(childrenElement).toBeInTheDocument();
});
