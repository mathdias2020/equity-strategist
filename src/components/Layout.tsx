
import { useLocation } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { BarChart3, Brain, LayoutDashboard, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Fluxo",
    icon: TrendingUp,
    href: "/flow",
  },
  {
    title: "Mercados",
    icon: BarChart3,
    href: "/markets",
  },
  {
    title: "IA",
    icon: Brain,
    href: "/ai",
  },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-trader-dark text-white">
        <Sidebar>
          <SidebarContent>
            <div className="py-4 flex flex-col h-full">
              <h1 className="text-xl font-bold text-center mb-8">
                <span className="text-gradient">Trader</span> Banqueiro
              </h1>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild>
                          <a
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                              location.pathname === item.href
                                ? "bg-trader-navy text-trader-green"
                                : "hover:bg-trader-navy/50"
                            )}
                          >
                            <item.icon className="h-5 w-5" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}

