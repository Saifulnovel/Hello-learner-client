import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import CourseIndex from "../component/Courses/CourseIndex";

import Courses from '../component/Courses/Courses';
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../layout/Main/Blog/Blog";
import Home from "../layout/Main/Home/Home";
import Main from "../layout/Main/Main";
import CheckOut from "../PrivateRoutes/CheckOut/CheckOut";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
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
        path: "blog",
        element: <Blog />,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`https://hello-learner.vercel.app/courses/${params.id}`),
        element: <Courses></Courses>,
      },
      {
        path: "/checkout/:id",

        loader: ({ params }) =>
          fetch(`https://hello-learner.vercel.app/courses/${params.id}`),

        element: (
          <PrivateRouter>
            <CheckOut />
          </PrivateRouter>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },

      //   {
      //     path: "/signup",
      //     element: <Signup />,
      //   },
    ],
  },
]);

export default routes;
