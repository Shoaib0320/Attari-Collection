import ProductsCard from "@/components/ProductsCard/ProductsCard";
import Navbar from "@/components/Root-Navbar/Navbar";


export default function Products(){
    return(
        <div>
            <Navbar />
          
            <h1 className="text-3xl text-center font-serif my-10">Products</h1>

            <ProductsCard />
        </div>    
        )
}