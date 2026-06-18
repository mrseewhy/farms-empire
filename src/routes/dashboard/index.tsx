import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

function DashboardHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome to the Farms Empire admin dashboard.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Total Blogs</p>
          <p className="text-2xl font-semibold text-foreground">—</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Open Careers</p>
          <p className="text-2xl font-semibold text-foreground">—</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Unread Contacts</p>
          <p className="text-2xl font-semibold text-foreground">—</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Total Users</p>
          <p className="text-2xl font-semibold text-foreground">—</p>
        </div>
      </div>
    </div>
  );
}
