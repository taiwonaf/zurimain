import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";
import SignUp from "../pages/onboarding/SignUp";

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
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  }
]);

export default router;
