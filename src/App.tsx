import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './pages/routes';

import Reset from './styles/reset';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes />

    <Reset />
  </BrowserRouter>
);
