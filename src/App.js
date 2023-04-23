import Create from './Create';
import Home from './Home';
import MainLayout from './MainLayout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const appRoutes = [
  {
    path: '/',
    element: (
      <MainLayout />
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/create',
        element: <Create />
      }
    ]
  }
];

const router = createBrowserRouter([
  {
    element: (
      <Outlet />
    ),
    children: appRoutes
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
