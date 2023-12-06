import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import PrivateWrapper from './components/PrivateWrapper';
import {
  AUTH_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  WELCOME_ROUTE,
} from './constants/route';
import { Login, Main, NotFound, Registration, Welcome } from './pages';

export const router = createBrowserRouter([
  {
    path: WELCOME_ROUTE,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Welcome />,
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
  {
    path: MAIN_ROUTE,
    element: (
      <PrivateWrapper>
        <Main />
      </PrivateWrapper>
    ),
    children: [
      {
        index: true,
        element: <div>MainComponent</div>,
      },
    ],
  },
]);
