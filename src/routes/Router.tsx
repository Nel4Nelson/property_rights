import LandingPage from "@/Pages/LandingPage";
import RegisterPage from "@/Pages/auth/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
