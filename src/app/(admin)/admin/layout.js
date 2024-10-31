// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import Link from "next/link";

// // export default function Layout({ children }) {
// //   return (
// //     <html>
// //       <body>
// //         <Tabs defaultValue="dashboard" className="w-full">
// //           <TabsList className = 'w-full'>
// //             <Link href={"/admin/dashboard"}>
// //               <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
// //             </Link>
// //             <Link href={"/admin/users"}>
// //               <TabsTrigger value="users">Users</TabsTrigger>
// //             </Link>
// //             <Link href={"/admin/addproducts"}>
// //               <TabsTrigger value="addproducts">Add products</TabsTrigger>
// //             </Link>
// //             <Link href={"/admin/categories"}>
// //               <TabsTrigger value="categories">Categories</TabsTrigger>
// //             </Link>
// //             <Link href={"/admin/subcategories"}>
// //               <TabsTrigger value="subcategories">Subcategories</TabsTrigger>
// //             </Link>
// //           </TabsList>
          
// //           <TabsContent value="dashboard">{children}</TabsContent>
// //           <TabsContent value="users">{children}</TabsContent>
// //           <TabsContent value="addproducts">{children}</TabsContent>
// //           <TabsContent value="categories">{children}</TabsContent>
// //           <TabsContent value="subcategories">{children}</TabsContent>
// //         </Tabs>
// //       </body>
// //     </html>
// //   );
// // }




// import { AppSidebar } from "@/components/Sidebar/Sidebar";
// import { SidebarProvider, Sidebar, SidebarTrigger } from "@/components/ui/sidebar"; // Adjust the import path based on your structure

// // export default function Layout({ children }) {
// //   return (
// //     <html>
// //       <body className="flex h-screen">
// //         {/* <SidebarProvider>
// //           <Sidebar />
// //           <AppSidebar />
// //           <main className="flex-1 p-8 bg-white overflow-auto">
// //             <SidebarTrigger /> 
// //             {children}
// //           </main>
// //         </SidebarProvider> */}
        
// //       </body>
// //     </html>
// //   );
// // }


// export default function Layout({ children }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }


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
