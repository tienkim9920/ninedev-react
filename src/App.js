import BlogDetail from './pages/BlogDetail';
import Create from './pages/Create';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import QRCodeScanner from './pages/QRScanner';
import QRCodeUpload from './pages/QRCodeUpload';
import QRCodeCamera from './pages/QRCodeCamera';

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
      },
      {
        path: '/blog/:id',
        element: <BlogDetail />
      },
      {
        path: '/scanner',
        element: <QRCodeScanner />
      },
      {
        path: '/camera-qrcode',
        element: <QRCodeCamera />
      },
      {
        path: '/upload-qrcode',
        element: <QRCodeUpload />
      },
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
