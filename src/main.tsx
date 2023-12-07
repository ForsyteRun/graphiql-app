import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider
        router={router}
        // fallbackElement={<div className="lds-dual-ring"></div>}
      />
    </Provider>
  </React.StrictMode>
);
