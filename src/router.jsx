import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import App from "./App";
import { LoginPage } from "@pages/login/Login";
import { HomePage } from "@pages/home/Home";
import { TrainingPage } from "@pages/training/Training";
import { MyPage } from "@pages/My/MyPage";
import Step1Page from "@pages/detail/step1";
import Step2Page from "@pages/detail/step2";
import Step3Page from "@pages/detail/step3";

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
      {
        path: "/detail/step1",
        element: <Step1Page />,
      },
      {
        path: "/detail/step2",
        element: <Step2Page />,
      },
      {
        path: "/detail/step3",
        element: <Step3Page />,
      },
    ],
  },
]);

export default router;
