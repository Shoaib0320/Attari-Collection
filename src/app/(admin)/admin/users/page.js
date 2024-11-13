// src/app/(admin)/admin/users/page.js

import { Suspense } from 'react';
import { connectDB } from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/User";
import UsersClient from './userClient';

export default async function UsersPage() {
  try {
    await connectDB();

    // Attempt to fetch users with a 20-second timeout
    const users = await UserModel.find().lean(); // Timeout set to 20 seconds

    return (
      <div className="min-h-screen mx-10">
        <div className="flex justify-between items-center my-4">
          <h1 className="font-bold text-xl">All Users</h1>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <UsersClient initialUsers={JSON.parse(JSON.stringify(users))} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Error fetching users:", error);

    return (
      <div className="min-h-screen mx-10">
        <div className="flex justify-between items-center my-4">
          <h1 className="font-bold text-xl">All Users</h1>
        </div>
        <p className="text-red-500">
          Failed to load users. Please try again later.
        </p>
      </div>
    );
  }
}
