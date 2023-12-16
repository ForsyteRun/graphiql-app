import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AUTH_ROUTE,
  MAIN_ROUTE,
  NOTFOUND_ROUTE,
  REGISTRATION_ROUTE,
  WELCOME_ROUTE,
} from './constants/route';
import { Login, Main, NotFound, Registration, Welcome } from './pages';
import AuthRequired from './components/AuthRequired';
import { NavigationLayout } from './layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<Welcome />} />
          <Route path={REGISTRATION_ROUTE} element={<Registration />} />
          <Route path={AUTH_ROUTE} element={<Login />} />
          <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
          <Route
            path={MAIN_ROUTE}
            element={
              <AuthRequired>
                <Routes>
                  <Route index element={<Main />} />
                  <Route path={WELCOME_ROUTE} element={<Welcome />} />
                </Routes>
              </AuthRequired>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
