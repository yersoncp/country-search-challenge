import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders Layout component', () => {
  render(<Layout>Body</Layout>)

  const childrenElement = screen.getByText("Body");
  expect(childrenElement).toBeInTheDocument();
});
