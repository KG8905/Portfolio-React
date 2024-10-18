import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Pages/AboutPage.jsx';
import Contact from './Pages/ContactPage.jsx';
import Project from './Pages/ProjectPage.jsx';
import Resume from './Pages/ResumePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'project',
        element: <Project />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],  
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode> // Remove StrictMode if not needed
    <RouterProvider router={router} />
  // </StrictMode>
);