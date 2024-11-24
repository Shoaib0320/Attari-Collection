"use client";



import { AppSidebar } from "@/components/Sidebar/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Adjust path if necessary

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        <AppSidebar /> {/* Sidebar */}
        
        <main className="flex-1 p-8 overflow-auto">
          <SidebarTrigger className={'bg-gray-700 text-white absolute hover:bg-gray-300 hover:text-black'}/> {/* Button to toggle sidebar */}
          {children} {/* Main content */}
        </main>
      </div>
    </SidebarProvider>
  );
}


