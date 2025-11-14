import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Routes";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css"; 


createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  
);
