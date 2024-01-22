import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';

test('renders container component', () => {
  render(<Container>Hello</Container>)

  const childrenElement = screen.getByText("Hello");
  expect(childrenElement).toBeInTheDocument();
});
