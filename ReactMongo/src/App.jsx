import React, { Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Index = React.lazy(() => import('./pages/Index'));
const Add = React.lazy(() => import('./pages/Add'));
const About = React.lazy(() => import('./pages/About'));
const NotFoundPage = React.lazy(() => import('./pages/404'));

const router = createBrowserRouter([
  {
    index: true,
    element: <Suspense fallback={<Loader />}><Index /></Suspense>,
  },
  {
    path: '/add',
    element: <Suspense fallback={<Loader />}><Add /></Suspense>,
  },
  {
    path: '/about',
    element: <Suspense fallback={<Loader />}><About /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense fallback={<Loader />}><NotFoundPage /></Suspense>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
