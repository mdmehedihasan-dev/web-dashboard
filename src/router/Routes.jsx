import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main/Main";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
    path: "/home",
    element: <Home/>,
  },
  // {
  //   path: "/sign-in",
  //   element: <SignIn/>,
  // },
  // {
  //   path: "/forgate-password",
  //   element: <ForgatePassword />,
  // },
  // {
  //   path: "/verify-code",
  //   element: <VerifyCode />,
  // },
  // {
  //   path: "/update-password",
  //   element: <UpdatePassword />,
  // },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard/>,
          },
          // {
          //   path: "/routes",
          //   element: <pages />,
          // },
        ],
      },
    ],
  },
]);
