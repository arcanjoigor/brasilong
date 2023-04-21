import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Social from './pages/Social';
import Sobre from './pages/Sobre';
import SocialDetails from './pages/SocialDetails';
import Doar from './pages/Doar';

import {createHashRouter, RouterProvider} from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "social",
        element: <Social />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "doar",
        element: <Doar />
      },
      {
        path: "/social/:id",
        element: <SocialDetails />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
