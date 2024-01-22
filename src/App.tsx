import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CountryDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
