
import { useLocation } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { BarChart3, Brain, LayoutDashboard, PlayCircle, Settings2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEndpointData } from "@/hooks/useEndpointData";
import { Button } from "./ui/button";

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
  const { fetchData } = useEndpointData('institutional-position', false);

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
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button
                          onClick={fetchData}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full justify-start text-sm font-normal",
                            "hover:bg-trader-navy/50"
                          )}
                          variant="ghost"
                        >
                          <PlayCircle className="h-5 w-5" />
                          <span>Ativar</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
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
                            href="/api-dolar"
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                              location.pathname === "/api-dolar"
                                ? "bg-trader-navy text-trader-green"
                                : "hover:bg-trader-navy/50"
                            )}
                          >
                            <Settings2 className="h-5 w-5" />
                            <span>API Dólar</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <a
                            href="/api-indice"
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                              location.pathname === "/api-indice"
                                ? "bg-trader-navy text-trader-green"
                                : "hover:bg-trader-navy/50"
                            )}
                          >
                            <Settings2 className="h-5 w-5" />
                            <span>API Índice</span>
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
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
