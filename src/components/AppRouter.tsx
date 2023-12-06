// AppRouter.tsx

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from '../routes';
import { Provider } from 'react-redux';
import store from '../store/store';

const AppRouter = () => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Provider>
    </>
  );
};

export { AppRouter };
