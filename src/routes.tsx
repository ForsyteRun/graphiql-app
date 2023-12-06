import {
  MAIN_ROUTE,
  NOTFOUND_ROUTE,
  REGISTRATION_ROUTE,
  AUTH_ROUTE,
} from './constants/route';
import { Main, Login, Registration, NotFound } from './pages';

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: NOTFOUND_ROUTE,
    Component: NotFound,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
  {
    path: AUTH_ROUTE,
    Component: Login,
  },
];
