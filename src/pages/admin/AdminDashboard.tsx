import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#faf4e5]">
      <main className="overflow-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
