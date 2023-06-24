import Layout from './pages/_layout';
import React, { lazy } from 'react';

const Main = lazy(() => import('./pages/main/index'));
const Char = lazy(() => import('./pages/char/char'))
const Login = lazy(() => import('./pages/login/index'));
const FreepostList = lazy(() => import('./pages/board/free/list/index'));
const RaidpostList = lazy(() => import('./pages/board/raid/list/index'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/Char', element: <Char /> },
      { path: '/login', element: <Login /> },
      { path: '/board/free/list', element:<FreepostList/>},
      { path: '/board/raid/list', element:<RaidpostList/>},
    ],
  },
];

export const pages = [{ route: '/' },{route:'/char'},{route:'/postList'}];