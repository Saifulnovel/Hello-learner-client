import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Courses from '../component/Courses/Courses';
import Home from '../layout/Main/Home/Home';
import Main from '../layout/Main/Main';

 const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/home",
        element:<Home/>,
      },
      
      {
        path: "/courses",
        element:<Courses/>,
        },
        {
            path: "/login",
        element:<Login/>    
        },
        {
            path: "/register",
            element:<SignUp/>
        }
    //   {
    //     path: "/signup",
    //     element: <Signup />,
    //   },
    ],
  },
]);


export default routes;
