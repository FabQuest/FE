import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import App from "./App";
import { LoginPage } from "@pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   index: true,
      //  element: <Navigate to="/login" replace />,
      // },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
