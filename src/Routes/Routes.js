import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import CourseIndex from "../component/Courses/CourseIndex";

import Courses from '../component/Courses/Courses';
import Home from "../layout/Main/Home/Home";
import Main from "../layout/Main/Main";
import CheckOut from "../PrivateRoutes/CheckOut";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/courseindex",
        element: <CourseIndex></CourseIndex>,
      },
      {
        
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`https://hello-learner.vercel.app/courses/${params.id}`),
        element: <Courses></Courses>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRouter>
            <CheckOut />
          </PrivateRouter>
        ),
      },
      //   {
      //     path: "/signup",
      //     element: <Signup />,
      //   },
    ],
  },
]);

export default routes;
