import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Button } from "@/components/ui/button";
import { Images, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#faf4e5] flex">
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b">
          <h1 className="font-heading font-bold text-lg text-primary">Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link
            to="/admin/gallery"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
          >
            <Images className="w-5 h-5" />
            Gallery
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={handleLogout}>
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
