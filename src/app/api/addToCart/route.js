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



// GET request to fetch all cart items
export async function GET() {
    try {
        // Connect to MongoDB
        await connectDB();

        // Fetch all cart items from the database
        const cartItems = await Cart.find(); // Assuming Cart is your model for cart items

        return new Response(JSON.stringify(cartItems), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error fetching cart items' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export async function DELETE(request) {
    try {
        await connectDB();
        const { id } = await request.json(); // Extract the ID from the request body
        console.log('Received ID to delete:', id); // Debugging log

        // Remove the item with the corresponding ID
        const deletedItem = await Cart.findByIdAndDelete(id);

        if (!deletedItem) {
            return new Response(JSON.stringify({ message: 'Item not found' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        return new Response(JSON.stringify({ message: 'Item deleted successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error deleting item:', error); // More specific error logging
        return new Response(JSON.stringify({ message: 'Error deleting item from cart' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
