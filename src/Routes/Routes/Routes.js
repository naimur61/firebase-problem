import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../LayOut/Main';
import Home from '../../Pages/Home/Home';

export const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         { path: '/', element: <Home /> }
      ]
   }
])

