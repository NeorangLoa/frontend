import Layout from './pages/_layout';
import React, { lazy } from 'react';

const Main = lazy(() => import('./pages/main/index'));
const Char = lazy(() => import('./pages/char/char'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/Char', element: <Char /> },
      

    ],
  },
];

export const pages = [{ route: '/' }];