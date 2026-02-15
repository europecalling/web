import { Navigate } from "react-router-dom";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export default function AdminIndex() {
  const { isAuthenticated } = useAdminAuth();
  return <Navigate to={isAuthenticated ? "/admin/gallery" : "/admin/login"} replace />;
}
