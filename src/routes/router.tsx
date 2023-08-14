import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import People from "../pages/People";
import Films from '../pages/Films';
import Species from '../pages/Species';
import MainLayout from '../layouts/MainLayout';
const router = createBrowserRouter([
{
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/people/",
      element: <People />,
    },
    {
      path: "/films/",
      element: <Films />,
    },
    {
      path: "/species/",
      element: <Species />,
    },
  ]
}
]);

export default router;
