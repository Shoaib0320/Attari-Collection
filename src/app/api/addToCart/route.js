// // /pages/api/cart.js
// import { connectDB } from '@/lib/db/connectDB';
// import Cart from '../../../lib/models/AddToCart';

// export default async function handler(req, res) {
//     await connectDB(); // Connect to the MongoDB database

//     if (req.method === 'POST') {
//         const { productId, title, description, price, quantity, imageUrl, category } = req.body;

//         if (!productId || !quantity || !price) {
//             return res.status(400).json({ error: 'Required fields are missing' });
//         }

//         try {
//             const cartItem = await Cart.create({
//                 productId,
//                 title,
//                 description,
//                 price,
//                 quantity,
//                 imageUrl,
//                 category
//             });

//             return res.status(201).json({ message: 'Product added to cart', cartItem });
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ error: 'Failed to add product to cart' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }





// /app/api/addToCart/route.js
import { connectDB } from '@/lib/db/connectDB';
import Cart from '../../../lib/models/AddToCart';

export async function POST(request) {
    try {
        // Connect to MongoDB
        await connectDB();

        // Parse the incoming JSON data from the request body
        const data = await request.json();

        // Create a new cart entry using the data
        const cartItem = new Cart(data);
        await cartItem.save();

        return new Response(JSON.stringify({ message: 'Product added to cart successfully' }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error adding product to cart' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
