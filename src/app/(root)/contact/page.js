import { auth } from "@/app/auth";
import Navbar from "@/components/Root-Navbar/Navbar";


export default async function Contact(){
    const session = await auth();
    return(
        <div>
            <Navbar session={session} />
                <h1 className="text-3xl text-center font-serif my-20">Contact Us</h1>
        </div>    
    )
}