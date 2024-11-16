import Navbar from "@/components/Root-Navbar/Navbar";
import { auth } from "../auth";
// import { SessionProvider } from "next-auth/react";

export default async function RootLayout({ children }) {
    const session = await auth();
  return (
    <html lang="en">
      <body
      >
        {/* {children} */}
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
