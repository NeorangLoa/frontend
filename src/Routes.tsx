import Layout from './pages/_layout';
import React, { lazy } from 'react';

const Main = lazy(() => import('./pages/main/index'));
const Login = lazy(() => import('./pages/login/index'));
const SignUp = lazy(() => import('./pages/signup/index'));
const Char = lazy(() => import('./pages/char/char'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/Char', element: <Char /> },
      

    ],
  },
];

export const pages = [{ route: '/' },{route:'/char'}];