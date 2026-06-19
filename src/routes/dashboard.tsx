import { Outlet, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { DashboardTopbar } from "../components/DashboardTopbar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    // Auth guard: redirect unauthenticated users to /login
    // TODO: Uncomment when auth Server Functions are implemented:
    // const session = await getSession();
    // if (!session?.user) {
    //   throw redirect({ to: "/login" });
    // }
  },
  component: DashboardLayout,
});

function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // TODO: Replace with actual session data from auth Server Function
  const user = {
    name: "Admin User",
    email: "admin@farmsempire.africa",
    role: "ADMIN",
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div
        className={cn(
          "flex flex-1 flex-col transition-all duration-200",
          sidebarCollapsed ? "ml-16" : "ml-64"
        )}
      >
        <DashboardTopbar user={user} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
