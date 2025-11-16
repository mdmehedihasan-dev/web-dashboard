import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main/Main";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Chat from "../Dashboard/chat/Chat";
import CustomerSupport from "../Dashboard/customerSupport/CustomerSupport";
import More from "../Dashboard/more/More";
import CourierSignup from "../pages/auth/CourierSignUp";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import CourierSignIn from "../pages/auth/CourierSignIn";

export const router = createBrowserRouter([
    {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/sign-in",
    element: <SignIn/>,
  },
  // {
  //   path: "/forgate-password",
  //   element: <ForgatePassword />,
  // },
  // {
  //   path: "/verify-code",
  //   element: <VerifyCode />,
  // },
    {
    path: "/sign-up",
    element: <SignUp/>,
  },

    {
    path: "/courier-signin",
    element: <CourierSignIn/>,
  },
  {
    path: "/courier-signup",
    element: <CourierSignup/>,
  },
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
         {
            path: "/chat",
            element: <Chat/>,
          },
           {
            path: "/customer-support",
            element: <CustomerSupport/>,
          },
               {
            path: "/more",
            element: <More/>,
          },
        ],
      },
    ],
  },
]);
