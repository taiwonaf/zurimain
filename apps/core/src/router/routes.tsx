import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";
import CheckEmail from "../pages/onboarding/CheckEmail";
import ForgotPassword from "../pages/onboarding/ForgotPassword";
import NewPassword from "../pages/onboarding/NewPassword";
import PasswordReset from "../pages/onboarding/PasswordReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Home</div>
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/new-password",
    element: <NewPassword />
  },
  {
    path: "/password-reset",
    element: <PasswordReset />
  },
  {
    path: "/check-email",
    element: <CheckEmail />
  },
]);

export default router;
