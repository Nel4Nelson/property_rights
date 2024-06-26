import LandingPage from "@/Pages/LandingPage";
import LoginPage from "@/Pages/auth/LoginPage";
import RegisterPage from "@/Pages/auth/RegisterPage";
import ProtectedLayout from "@/components/ProtectedLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    element: <ProtectedLayout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
]);

export default router;
