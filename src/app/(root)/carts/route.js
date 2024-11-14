// pages/api/cart/index.js
import { getSession } from 'next-auth/react';
import Cart from '../../../models/Cart';
import { connectDB } from '@/lib/db/connectDB';

export default async function handler(req, res) {
  // DB connection
  await connectDB();

  if (req.method === 'GET') {
    try {
      // Get user session
      const session = await getSession({ req });
      if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // Fetch cart items for user
      const cart = await Cart.findOne({ user: session.user._id }).populate('products.productId');
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }

      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const session = await getSession({ req });
      if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const { productId, title, description, price, quantity, imageUrl, category } = req.body;

      // Check if cart already exists
      let cart = await Cart.findOne({ user: session.user.id });

      if (!cart) {
        // If no cart, create new one
        cart = new Cart({
          user: session.user._id,
          products: [{ productId, title, description, price, quantity, imageUrl, category }],
        });
      } else {
        // If cart exists, update it
        const productIndex = cart.products.findIndex(item => item.productId.toString() === productId);
        
        if (productIndex !== -1) {
          // Product exists, update quantity
          cart.products[productIndex].quantity += quantity;
        } else {
          // Add new product to cart
          cart.products.push({ productId, title, description, price, quantity, imageUrl, category });
        }
      }

      await cart.save();
      return res.status(200).json({ message: 'Cart updated successfully', cart });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
  }

  // Method Not Allowed
  res.status(405).json({ message: 'Method Not Allowed' });
}
