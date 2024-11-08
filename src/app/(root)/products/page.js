import { auth } from "@/app/auth";
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import Navbar from "@/components/Root-Navbar/Navbar";


export default async function Products(){
    const session = await auth();

    return(
        <div>
            <Navbar session={session} />
          
            <h1 className="text-3xl text-center font-serif my-10">Products</h1>

            <ProductsCard />

        </div>    
        )
}
