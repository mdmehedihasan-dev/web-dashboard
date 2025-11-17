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
import Step1 from "../pages/request/Step1";
import Step2 from "../pages/request/Step2";
import Step3 from "../pages/request/Step3";
import Step4 from "../pages/request/Step4";
import Step5 from "../pages/request/Step5";
import Step6 from "../pages/request/Step6";
import MyRequests from "../Dashboard/myRequests/MyRequests";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
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
    element: <SignUp />,
  },
  {
    path: "/courier-signin",
    element: <CourierSignIn />,
  },
  {
    path: "/courier-signup",
    element: <CourierSignup />,
  },
  { path: "/request/form/step/1", element: <Step1 /> },
  { path: "/request/form/step/2", element: <Step2 /> },
  { path: "/request/form/step/3", element: <Step3 /> },
  { path: "/request/form/step/4", element: <Step4 /> },
  { path: "/request/form/step/5", element: <Step5 /> },
   { path: "/request/form/step/6", element: <Step6/> },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/chat",
            element: <Chat />,
          },
          {
            path: "/customer-support",
            element: <CustomerSupport />,
          },
            {
            path: "/my-requests",
            element: <MyRequests/>,
          },
          {
            path: "/more",
            element: <More />,
          },
          { path: "/request/form/step/1", element: <Step1 /> },
        ],
      },
    ],
  },
]);
