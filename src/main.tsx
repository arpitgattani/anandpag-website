import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './app/routes';
import { MediaConfigProvider } from './app/contexts/MediaConfigContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MediaConfigProvider>
      <RouterProvider router={router} />
    </MediaConfigProvider>
  </React.StrictMode>
);