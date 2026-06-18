import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Briefcase,
  Mail,
  Users,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Blogs", href: "/dashboard/blogs", icon: FileText },
  { label: "Projects", href: "/dashboard/projects", icon: FolderOpen },
  { label: "Careers", href: "/dashboard/careers", icon: Briefcase },
  { label: "Contacts", href: "/dashboard/contacts", icon: Mail },
  { label: "Users", href: "/dashboard/users", icon: Users },
];

interface DashboardSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export function DashboardSidebar({ collapsed = false, onToggle }: DashboardSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border bg-card transition-all duration-200",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center gap-2">
            <span className="font-display text-lg text-primary">Farms Empire</span>
          </Link>
        )}
        <button
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                activeProps={{
                  className: "bg-primary/10 text-primary",
                }}
                activeOptions={{
                  exact: item.href === "/dashboard",
                }}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="border-t border-border px-4 py-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Farms Empire
          </p>
        </div>
      )}
    </aside>
  );
}
