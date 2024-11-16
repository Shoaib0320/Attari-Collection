import { auth, signIn, } from "@/app/auth"
import { Button } from "../ui/button"
 
export default async function SignIn() {
  const session = await auth();

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >     <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 bg-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M21.35 11.1H12v2.8h5.42C16.93 16.4 14.65 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.5 0 2.87.55 3.93 1.46l2.1-2.1C16.67 4.64 14.42 4 12 4 6.48 4 2 8.48 2 14s4.48 10 10 10c5.52 0 10-4.48 10-10 0-.67-.07-1.33-.15-2z" />
              </svg>
              Continue with Google
          </Button>
    </form>
  )
} 
