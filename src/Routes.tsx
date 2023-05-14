import Layout from '@src/pages/_layout';
import React, { lazy } from 'react';

const Main = lazy(() => import('@src/pages/main/index'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },

    ],
  },
];

export const pages = [{ route: '/' }];