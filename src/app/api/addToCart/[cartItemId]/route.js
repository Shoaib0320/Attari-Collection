import { connectDB } from '@/lib/db/connectDB';
import { ObjectId } from 'mongodb';

export async function DELETE(request, { params }) {
  try {
    const { cartItemId } = params;
    const { db } = await connectDB();

    const result = await db.collection('carts').deleteOne({
      _id: new ObjectId(cartItemId)
    });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ success: false, message: 'Cart item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, message: 'Cart item deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}