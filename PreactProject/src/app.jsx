import { Suspense, lazy } from 'preact/compat';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Index = lazy(() => import('./pages/Index'));
const Add = lazy(() => import('./pages/Add'));
const About = lazy(() => import('./pages/About'));
const NotFoundPage = lazy(() => import('./pages/404'));

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

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
