import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import BlogDetails from "../pages/BlogDetails";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blogs/:id",
          element: <BlogDetails />,
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
