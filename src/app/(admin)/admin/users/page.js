// "use client"

import { connectDB } from "@/lib/db/connectDB";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { UserModel } from "@/lib/models/User";

// Connect to database and fetch users data
export async function usersData() {
  try {
    await connectDB(); // Ensure the database is connected
    const users = await UserModel.find(); // Fetch all users
    console.log("Fetched Users:", users); // Debug: Check if users are retrieved
    return users || []; // Return users array, or empty array if none found
  } catch (error) {
    console.error("Error fetching users data:", error); // Log any errors
    return []; // Return empty array in case of an error
  }
}

// Main Users component
export default async function Users() {
  const users = await usersData(); // Fetch user data and ensure it’s awaited

  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Users</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile Image</TableHead>
            <TableHead className="w-[100px]">FirstName</TableHead>
            <TableHead className="w-[100px]">LastName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user._id}>
                <TableCell className="text-right">
                  <Image
                    src={user.picture}
                    alt={user.firstName}
                    style={{ objectFit: "cover" }}
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                </TableCell>
                <TableCell className="font-medium">{user.firstName}</TableCell>
                <TableCell className="font-medium">{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="4" className="text-center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
