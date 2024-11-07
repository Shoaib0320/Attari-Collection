// "use server"; // No need to put use server here because it's an API route

import { signOut } from "@/app/auth";

export async function POST() {
  await signOut("google");
  return Response("Logged out successfully", { status: 200 });
}
