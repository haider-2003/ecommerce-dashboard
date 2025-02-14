import { Home } from "lucide-react";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { LuShoppingBag } from "react-icons/lu";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Link } from "react-router";

const items = [
  { title: "Dashboard", icon: Home, url: "" },
  { title: "Prodcuts", icon: MdOutlineShoppingBasket, url: "products" },
  { title: "Orders/Customers", icon: LuShoppingBag, url: "orders" },
  { title: "Settings", icon: SlSettings, url: "settings" },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div>Youser account</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div>footer</div>
      </SidebarFooter>
    </Sidebar>
  );
}
