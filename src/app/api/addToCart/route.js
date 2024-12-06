// @/app/api/cart/route.js

// app/api/addToCart/route.js

import { NextResponse } from 'next/server';
import CartModel from '@/lib/models/AddToCart';
import { auth } from '@/app/auth';
import { connectDB } from '@/lib/db/connectDB';
import CartModal from '@/lib/models/AddToCart';

export async function POST(request) {
  await connectDB();

  const session = await auth();
  if (!session) {
    return NextResponse.json({ success: false, message: "User not authenticated" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { productId, title, description, price, quantity, imageUrl, category } = body;
    const userId = session.user._id;

    const cartItem = await CartModel.create({
      productId,
      title,
      description,
      price,
      quantity,
      imageUrl,
      category,
      user: userId,
    });

    return NextResponse.json({ success: true, data: cartItem }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


// For GET request to fetch cart items for logged-in user
export async function GET(request) {
  await connectDB();

  const session = await auth(); // Get user session via the auth() function
  if (!session) {
    return NextResponse.json({ success: false, message: "User not authenticated" }, { status: 401 });
  }

  try {
    const userId = session.user._id;
    const cartItems = await CartModel.find({ user: userId }); // Get cart items by the user's ID
    
    return NextResponse.json({ success: true, data: cartItems });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// export async function DELETE(request) {
//   try {
//     await connectDB()

//     const session = await auth()
//     if (!session) {
//       return NextResponse.json({ success: false, message: "User not authenticated" }, { status: 401 })
//     }

//     const { searchParams } = new URL(request.url)
//     const itemId = searchParams.get('itemId')

//     if (!itemId) {
//       return NextResponse.json({ success: false, message: "Item ID is required" }, { status: 400 })
//     }

//     const userId = session.user._id
//     const result = await CartModel.deleteOne({ _id: itemId, user: userId })

//     if (result.deletedCount === 0) {
//       return NextResponse.json({ success: false, message: "Item not found or not authorized to delete" }, { status: 404 })
//     }

//     return NextResponse.json({ success: true, message: "Item deleted successfully" })
//   } catch (error) {
//     console.error('Error in DELETE /api/cart:', error)
//     return NextResponse.json({ success: false, message: error.message || 'Internal server error' }, { status: 500 })
//   }
// }

// export async function DELETE(request) {
//   try {
//     await connectDB();

//     const session = await auth();
//     if (!session) {
//       return NextResponse.json({ success: false, message: "User not authenticated" }, { status: 401 });
//     }

//     const { searchParams } = new URL(request.url);
//     const userId = searchParams.get('userId');

//     if (!userId) {
//       return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
//     }

//     const result = await CartModel.deleteMany({ user: userId });

//     if (result.deletedCount === 0) {
//       return NextResponse.json({ success: false, message: "No cart items found for the user" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: "cart item deleted successfully" });
//   } catch (error) {
//     console.error('Error in DELETE /api/cart:', error);
//     return NextResponse.json({ success: false, message: error.message || 'Internal server error' }, { status: 500 });
//   }
// }


export async function DELETE(request) {
  try {
    await connectDB();

    const session = await auth();
    if (!session) {
      return NextResponse.json({ success: false, message: "User not authenticated" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const itemId = searchParams.get('itemId');

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
    }

    let result;
    if (itemId) {
      // Delete a single item
      result = await CartModel.deleteOne({ user: userId, _id: itemId });
      if (result.deletedCount === 0) {
        return NextResponse.json({ success: false, message: "Item not found in the cart" }, { status: 404 });
      }
    } else {
      // Delete all items for the user
      result = await CartModel.deleteMany({ user: userId });
      if (result.deletedCount === 0) {
        return NextResponse.json({ success: false, message: "No cart items found for the user" }, { status: 404 });
      }
    }

    return NextResponse.json({ success: true, message: itemId ? "Item deleted successfully" : "All cart items deleted successfully" });
  } catch (error) {
    console.error('Error in DELETE /api/cart:', error);
    return NextResponse.json({ success: false, message: error.message || 'Internal server error' }, { status: 500 });
  }
}
