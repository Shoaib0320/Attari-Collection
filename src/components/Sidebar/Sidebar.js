// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarHeader,
//   } from "@/components/ui/sidebar"
// import Link from "next/link"
  
//   export function AppSidebar() {
//     return (
//       <Sidebar>
//         <SidebarHeader />
//         <SidebarContent>
//             <div className="flex flex-col">
//                 <h2 className="p-4 text-lg font-semibold">Admin Panel</h2>
//                 <nav className="flex flex-col space-y-2 p-4">
//                     <div>
//                         <Link href="/admin/dashboard" className="block p-2 hover:bg-gray-300">Dashboard</Link>
//                    </div>
//                    <div>
//                     <Link href="/admin/users" className="block p-2 hover:bg-gray-300">Users</Link>
//                    </div>
//                   <Link href="/admin/addproducts" className="block p-2 hover:bg-gray-300">Add Products</Link>
//                   <Link href="/admin/categories" className="block p-2 hover:bg-gray-300">Categories</Link>
//                   <Link href="/admin/subcategories" className="block p-2 hover:bg-gray-300">Subcategories</Link>
//                 </nav>
//               </div>
//           <SidebarGroup />
//           <SidebarGroup />
//         </SidebarContent>
//         <SidebarFooter />
//       </Sidebar>
//     )
//   }
  




"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"; // Update this path based on your structure
import Link from "next/link";
import {
    ChatBubbleLeftIcon,
    ClipboardDocumentListIcon, // Alternative icon
    HomeIcon,
    ShoppingBagIcon,
    UserIcon,
  } from "@heroicons/react/24/outline";
  
export function AppSidebar() {
    return (
        <Sidebar className="w-64 bg-gray-900 text-white h-full shadow-md">
            {/* Sidebar Header */}
            <SidebarHeader className="p-4 border-b border-gray-700">
                <h2 className="flex text-2xl font-serif justify-center text-gray-800 font-bold ">Admin Panel</h2>
            </SidebarHeader>
            
            {/* Sidebar Content */}
            <SidebarContent className="p-4">
                <nav className="flex flex-col space-y-3">
                    {/* Dashboard Link */}
                    {/* <Link href="/admin/dashboard" className="flex bg-gray-800 items-center p-3 rounded hover:bg-gray-300 transition hover:text-black">
                        <HomeIcon className="w-6 h-6 mr-3" /> 
                        Dashboard
                    </Link> */}

                    <Link
                        href="/admin"
                        className="flex items-center p-3 rounded bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto"
                        >
                        <HomeIcon className="w-6 h-6 mr-3" /> {/* Dashboard icon */}
                        <span className="text-sm sm:text-base">Dashboard</span>
                    </Link>


                    {/* Users Link */}
                    <Link href="/admin/users" 
                        className="flex items-center p-3 rounded bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto"
                        >
                        <UserIcon className="w-6 h-6 mr-3" /> {/* Users icon */}
                        Users
                    </Link>

                    {/* Add Products Link */}
                    <Link href="/admin/addproducts" 
                        className="flex items-center p-3 rounded bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto"
                        >
                        <ShoppingBagIcon className="w-6 h-6 mr-3" /> {/* Products icon */}
                        Add Products
                    </Link>

                    {/* Orders Link */}
                    <Link href="/admin/orders" 
                        className="flex items-center p-3 rounded bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto"
                        >
                        <ClipboardDocumentListIcon className="w-6 h-6 mr-3" /> {/* Orders icon */}
                        Orders
                    </Link>

                    {/* Feedback Link */}
                    <Link href="/admin/feedback" 
                        className="flex items-center p-3 rounded bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto"
                        >
                        <ChatBubbleLeftIcon className="w-6 h-6 mr-3" /> {/* Feedback icon */}
                        Feedback
                    </Link>
                </nav>
            </SidebarContent>

            {/* Sidebar Footer */}
            <SidebarFooter className="p-4 border-t border-gray-700">
                <p className="flex text-sm font-serif justify-center text-gray-700">© 2024 Admin Dashboard</p>
            </SidebarFooter>
        </Sidebar>
    );
}
