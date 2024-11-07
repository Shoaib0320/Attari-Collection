"use server";

import { signOut } from "@/app/auth"
import { Button } from "../ui/button"

export default async function SignOut() {
    return (
      <form
        action={async () => {
          "use server"
          await signOut("google")
        }}
      >
        <Button
          type="submit"
          className="w-2/2 px-4 py-2 text-sm mx-5 text-gray-700 bg-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Logout
        </Button>
      </form>   
    )
  }
  
