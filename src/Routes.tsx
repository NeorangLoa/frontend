import Layout from './pages/_layout';
import React, { lazy } from 'react';

const Main = lazy(() => import('./pages/main/index'));
const Char = lazy(() => import('./pages/char/char'))
const Login = lazy(() => import('./pages/login/index'));
const PostList = lazy(() => import('./pages/board/free/list/index'));
const FreeEdit = lazy(() => import('./pages/board/free/edit/index'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/Char', element: <Char /> },
      { path: '/login', element: <Login /> },
      { path: '/postList', element:<PostList/>},
      { path: '/free/edit', element:<FreeEdit/>},
    ],
  },
];

export const pages = [{ route: '/' },{route:'/char'},{route:'/postList'}];