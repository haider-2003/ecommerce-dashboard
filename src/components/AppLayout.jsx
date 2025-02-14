import { Outlet } from "react-router";
import { SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-[auto,1fr] h-screen m-3">
      <AppSidebar />
      <main className=" ml-3 ">
        <SidebarTrigger />
        <Outlet />
      </main>
    </div>
  );
}
