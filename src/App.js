import Create from './Create';
import Home from './Home';
import MainLayout from './MainLayout';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound';

const appRoutes = [
  {
    path: '/',
    element: (
      <MainLayout />
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/create',
        element: <Create />
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ]
  },
];

const router = createBrowserRouter([
  {
    element: (
      <Outlet />
    ),
    children: appRoutes,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
