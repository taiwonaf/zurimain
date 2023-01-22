import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";
import SignUp from "../pages/onboarding/SignUp";
import VerifyEmail from "../pages/onboarding/VerifyEmail";

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
      },
    ]
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />
  },
]);

export default router;
