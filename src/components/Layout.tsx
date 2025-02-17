
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { BarChart3, Brain, LayoutDashboard, Menu, Settings2, TrendingUp } from "lucide-react";
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
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="min-h-screen w-full flex flex-col md:flex-row bg-trader-dark text-white">
        <Sidebar className="border-r border-trader-gray">
          <SidebarContent>
            <div className="py-4 flex flex-col h-full">
              <div className="flex items-center justify-between px-4 mb-8">
                <h1 className="text-xl font-bold">
                  <span className="text-gradient">Trader</span> Banqueiro
                </h1>
                {isMobile && (
                  <SidebarTrigger>
                    <Menu className="h-6 w-6" />
                  </SidebarTrigger>
                )}
              </div>
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
              <div className="mt-auto">
                <SidebarGroup>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <a
                            href="/api"
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                              location.pathname === "/api"
                                ? "bg-trader-navy text-trader-green"
                                : "hover:bg-trader-navy/50"
                            )}
                          >
                            <Settings2 className="h-5 w-5" />
                            <span>API</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 min-h-screen p-4 md:p-6 overflow-auto">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
