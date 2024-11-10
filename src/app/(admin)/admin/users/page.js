import { Suspense } from 'react'
import { connectDB } from "@/lib/db/connectDB"
import { UserModel } from "@/lib/models/User"
import UsersClient from './userClient'

export default async function UsersPage() {
  await connectDB()
  const users = await UserModel.find().lean()

  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">All Users</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersClient initialUsers={JSON.parse(JSON.stringify(users))} />
      </Suspense>
    </div>
  )
}