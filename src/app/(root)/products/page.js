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


// "use client"
// import { useEffect, useState } from 'react';
// import Navbar from '@/components/Root-Navbar/Navbar';
// import ProductsCard from '@/components/ProductsCard/ProductsCard';

// const Products = () => {
//     const [items, setItems] = useState([]); // Initialize items as an empty array

//     useEffect(() => {
//         // Replace this with your data fetching logic
//         fetch('/api/products')
//             .then(response => response.json())
//             .then(data => setItems(data)) // Set fetched data to items
//             .catch(error => console.error('Error fetching items:', error));
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             {items.length === 0 ? (
//                 <p>Loading products...</p> // Show loading message while fetching
//             ) : (
//                 items.map((item) => (
//                     <ProductsCard key={item.id} product={item} />
//                 ))
//             )}
//         </div>
//     );
// };

// export default Products;
