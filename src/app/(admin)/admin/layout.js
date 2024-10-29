import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className = 'w-full'>
            <Link href={"/admin/dashboard"}>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </Link>
            <Link href={"/admin/users"}>
              <TabsTrigger value="users">Users</TabsTrigger>
            </Link>
            <Link href={"/admin/addproducts"}>
              <TabsTrigger value="addproducts">Add products</TabsTrigger>
            </Link>
            <Link href={"/admin/categories"}>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </Link>
            <Link href={"/admin/subcategories"}>
              <TabsTrigger value="subcategories">Subcategories</TabsTrigger>
            </Link>
          </TabsList>
          
          <TabsContent value="dashboard">{children}</TabsContent>
          <TabsContent value="users">{children}</TabsContent>
          <TabsContent value="addproducts">{children}</TabsContent>
          <TabsContent value="categories">{children}</TabsContent>
          <TabsContent value="subcategories">{children}</TabsContent>
        </Tabs>
      </body>
    </html>
  );
}
