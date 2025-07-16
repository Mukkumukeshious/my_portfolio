import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import HomePage from "./HomePage";
import Skill from "./Skill";
import Project from "./Project";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/skill",
        element: <Skill/>
      },
      {
        path:"/project",
        element: <Project/>

      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default AppRouter;
