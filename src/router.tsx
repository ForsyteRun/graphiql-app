import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AUTH_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from './constants/route';
import { Login, Main, NotFound, Registration } from './pages';

export const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: MAIN_ROUTE,
        element: <Main />,
      },
      {
        path: REGISTRATION_ROUTE,
        element: <Registration />,
      },
      {
        path: AUTH_ROUTE,
        element: <Login />,
      },
    ],
  },
]);
