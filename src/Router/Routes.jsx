import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Error Page 404 not found</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
