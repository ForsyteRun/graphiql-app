import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      // fallbackElement={<div className="lds-dual-ring"></div>}
    />
  </React.StrictMode>
);
