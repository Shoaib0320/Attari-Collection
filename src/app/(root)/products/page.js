import Footer from "@/components/Footer/Footer";
import ProductsCard from "@/components/ProductsCard/ProductsCard";


export default async function Products(){

    return(
        <div>
          
            <h1 className="text-3xl text-center font-serif my-10">Products</h1>

            <ProductsCard />

            <div className="mt-10">
                <Footer />
            </div>

        </div>    
        )
}
