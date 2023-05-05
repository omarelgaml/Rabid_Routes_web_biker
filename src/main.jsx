import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./views/pages/auth/Signup.jsx";
import LoginPage from "./views/pages/auth/Login.jsx";
import ResetPasswordEmailPage from "./views/pages/auth/ResPassEmail.jsx";
import ResetPasswordPage from "./views/pages/auth/ResPassword.jsx";
import Landing from "./views/pages/landing/Landing.jsx";
import { store } from "./state/Store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button>Back Home</Button>
          </Link>
        }
      />
    ),
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/reset-password-email",
    element: <ResetPasswordEmailPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
