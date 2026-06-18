import { cn } from "@/lib/utils";

interface DashboardTopbarProps {
  user?: {
    name: string;
    email: string;
    role: string;
  };
  className?: string;
}

export function DashboardTopbar({ user, className }: DashboardTopbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/80 px-6 backdrop-blur-sm",
        className
      )}
    >
      {/* Left: Page context (slot for breadcrumbs or page title) */}
      <div className="flex items-center gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">Dashboard</h2>
      </div>

      {/* Right: User menu */}
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.role}</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
        {/* TODO: Replace with actual logout Server Function call that invalidates session before redirect */}
        <button
          onClick={() => {
            // TODO: Call logoutUser Server Function, then redirect to /login
            window.location.href = "/login";
          }}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
