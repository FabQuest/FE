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
import Step4Page from "@pages/detail/step4";
import Step5Page from "@pages/detail/step5";
import Step6Page from "@pages/detail/step6";
import Step7Page from "@pages/detail/step7";

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
      {
        path: "/detail/step4",
        element: <Step4Page />,
      },
      {
        path: "/detail/step5",
        element: <Step5Page />,
      },
      {
        path: "/detail/step6",
        element: <Step6Page />,
      },
      {
        path: "/detail/step7",
        element: <Step7Page />,
      }
    ],
  },
]);

export default router;
