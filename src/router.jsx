import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import App from "./App";
import { LoginPage } from "@pages/login/Login";
import { HomePage } from "@pages/home/Home";
import { TrainingPage } from "@pages/training/Training";
import { MyPage } from "@pages/My/MyPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/training",
        element: <TrainingPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
