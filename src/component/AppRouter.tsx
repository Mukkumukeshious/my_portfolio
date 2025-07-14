import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import HomePage from "./HomePage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
       {
        index: true,
        element:<HomePage/>

       }, 

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default AppRouter;
