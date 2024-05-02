import SideBar from "./SideBar";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import useAuth from "@/hooks/useAuth";

const ProtectedLayout = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[50px_1fr_50px] lg:grid-cols-[100px_1fr_100px]">
      <SideBar />
      <div className="grid grid-rows-[60px_1fr] bg-muted/40">
        <NavBar />
        <Outlet />
      </div>
      <div className="hidden border-l bg-muted/40 md:block"></div>
    </div>
  );
};

export default ProtectedLayout;
