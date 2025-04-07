import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import BookedServices from "../pages/BookedServices";
import AddServicePage from "../pages/AddServicePage";
import ManageServices from "../pages/ManageServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings/:email",
        element: (
          <PrivateRoute>
            <BookedServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddServicePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-services",
        element: <ManageServices />,
      },
    ],
  },
]);

export default router;
