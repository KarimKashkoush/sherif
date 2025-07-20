import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Belqas1 from './pages/Belqas1';
import Belqas2 from './pages/Belqas2';
import Belqas3 from './pages/Belqas3';
import Mansoura1 from './pages/Mansoura1'
import Mansoura2 from './pages/Mansoura2'
import Online1 from './pages/Online1'
import Online2 from './pages/Online2'
import Online3 from './pages/Online3'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Online4 from './pages/Online4';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Belqas1",
    element: <Belqas1 />,
  },

  {
    path: "/Belqas2",
    element: <Belqas2 />,
  },

  {
    path: "/Belqas3",
    element: <Belqas3 />,
  },

  {
    path: "/Mansoura1",
    element: <Mansoura1 />,
  },

  {
    path: "/Mansoura2",
    element: <Mansoura2 />,
  },

  {
    path: "/Online1",
    element: <Online1 />,
  },

  {
    path: "/Online2",
    element: <Online2 />,
  },

  {
    path: "/Online3",
    element: <Online3 />,
  },
  {
    path: "/Online4",
    element: <Online4 />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('sherif'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);