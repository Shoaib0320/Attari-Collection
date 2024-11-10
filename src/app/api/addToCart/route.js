// // // // // // /app/api/addToCart/route.js
// // // // // import { connectDB } from '@/lib/db/connectDB';
// // // // // import Cart from '../../../lib/models/AddToCart';

// // // // // export async function POST(request) {
// // // // //     try {
// // // // //         // Connect to MongoDB
// // // // //         await connectDB();

// // // // //         // Parse the incoming JSON data from the request body
// // // // //         const data = await request.json();

// // // // //         // Create a new cart entry using the data
// // // // //         const cartItem = new Cart(data);
// // // // //         await cartItem.save();

// // // // //         return new Response(JSON.stringify({ message: 'Product added to cart successfully' }), {
// // // // //             status: 201,
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //         });
// // // // //     } catch (error) {
// // // // //         console.error(error);
// // // // //         return new Response(JSON.stringify({ message: 'Error adding product to cart' }), {
// // // // //             status: 500,
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //         });
// // // // //     }
// // // // // }



// // // // // // GET request to fetch all cart items
// // // // // export async function GET() {
// // // // //     try {
// // // // //         // Connect to MongoDB
// // // // //         await connectDB();

// // // // //         // Fetch all cart items from the database
// // // // //         const cartItems = await Cart.find(); // Assuming Cart is your model for cart items

// // // // //         return new Response(JSON.stringify(cartItems), {
// // // // //             status: 200,
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //         });
// // // // //     } catch (error) {
// // // // //         console.error(error);
// // // // //         return new Response(JSON.stringify({ message: 'Error fetching cart items' }), {
// // // // //             status: 500,
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //         });
// // // // //     }
// // // // // }

// // // // // export async function DELETE(request) {
// // // // //     try {
// // // // //         await connectDB();
// // // // //         const { id } = await request.json(); // Extract the ID from the request body
// // // // //         console.log('Received ID to delete:', id); // Debugging log

// // // // //         // Remove the item with the corresponding ID
// // // // //         const deletedItem = await Cart.findByIdAndDelete(id);

// // // // //         if (!deletedItem) {
// // // // //             return new Response(JSON.stringify({ message: 'Item not found' }), {
// // // // //                 status: 404,
// // // // //                 headers: {
// // // // //                     'Content-Type': 'application/json',
// // // // //                 },
// // // // //             });
// // // // //         }

// // // // //         return new Response(JSON.stringify({ message: 'Item deleted successfully' }), {
// // // // //             status: 200,
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //         });
// // // // //     } catch (error) {
// // // // //         console.error('Error deleting item:', error); // More specific error logging
// // // // //         return new Response(JSON.stringify({ message: 'Error deleting item from cart' }), {
// // // // //             status: 500,
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //             },
// // // // //         });
// // // // //     }
// // // // // }





// // // // import Cart from '@/lib/models/AddToCart'; // Import your Cart model
// // // // import { connectDB } from '@/lib/db/connectDB';

// // // // // API Handler for adding to cart
// // // // export default async function handler(req, res) {
// // // //     // Check if the request method is POST
// // // //     if (req.method === 'POST') {
// // // //       try {
// // // //         // Connect to the database
// // // //         await connectDB();
  
// // // //         // Destructure the necessary fields from the request body
// // // //         const { productId, title, price, quantity, imageUrl } = req.body;
  
// // // //         // Validate if all required data is provided
// // // //         if (!productId || !title || !price || !quantity || !imageUrl) {
// // // //           return res.status(400).json({
// // // //             success: false,
// // // //             message: 'Missing required fields (productId, title, price, quantity, imageUrl)',
// // // //           });
// // // //         }
  
// // // //         // Get session to fetch userId (assuming you have a session handling system)
// // // //         const session = req.session; // Use next-auth or other session methods as per your setup
  
// // // //         if (!session || !session.userId) {
// // // //           return res.status(401).json({
// // // //             success: false,
// // // //             message: 'User is not logged in',
// // // //           });
// // // //         }
  
// // // //         // Check if the cart already exists for the user
// // // //         let cart = await Cart.findOne({ userId: session.userId });
  
// // // //         if (cart) {
// // // //           // If cart exists, check if product is already in cart
// // // //           const existingItem = cart.items.find(item => item.productId.toString() === productId);
  
// // // //           if (existingItem) {
// // // //             // If product is in cart, update the quantity
// // // //             existingItem.quantity += quantity;
// // // //           } else {
// // // //             // If product is not in cart, add new item
// // // //             cart.items.push({
// // // //               productId,
// // // //               title,
// // // //               price,
// // // //               quantity,
// // // //               imageUrl,
// // // //             });
// // // //           }
  
// // // //           // Save the updated cart
// // // //           await cart.save();
// // // //           return res.status(200).json({ success: true, message: 'Item added/updated in cart' });
// // // //         } else {
// // // //           // If no cart exists, create a new cart for the user
// // // //           cart = new Cart({
// // // //             userId: session.userId,
// // // //             items: [
// // // //               {
// // // //                 productId,
// // // //                 title,
// // // //                 price,
// // // //                 quantity,
// // // //                 imageUrl,
// // // //               },
// // // //             ],
// // // //           });
  
// // // //           // Save the new cart
// // // //           await cart.save();
// // // //           return res.status(200).json({ success: true, message: 'New cart created and item added' });
// // // //         }
// // // //       } catch (error) {
// // // //         console.error('Error adding to cart:', error);
// // // //         return res.status(500).json({
// // // //           success: false,
// // // //           message: 'An error occurred while adding to the cart.',
// // // //           error: error.message,
// // // //         });
// // // //       }
// // // //     } else {
// // // //       // If the request method is not POST, return Method Not Allowed
// // // //       res.status(405).json({
// // // //         success: false,
// // // //         message: 'Method Not Allowed. Only POST requests are allowed.',
// // // //       });
// // // //     }
// // // //   }
  








// // // // app/api/add-to-cart/route.js
// // // import { connectDB } from "@/lib/db/connectDB";
// // // import { CartModal } from "@/lib/models/AddToCart"; // Assuming Cart model is set up
// // // import { auth } from "@/app/auth"; // This will help access session (user info)

// // // export async function POST(req) {
// // //   try {
// // //     // Get the user session
// // //     const session = auth();
// // //     if (!session || !session.user._id) {
// // //       return Response(JSON.stringify({ error: "User not logged in!" }), { status: 401 });
// // //     }

// // //     // Get the cart data from the request body
// // //     const { productId, quantity, totalPrice, description, title, price, imageUrl, category } = await req.json();

// // //     // Create new cart item object
// // //     const cartItem = {
// // //       userId: session.user._id, // Use user ID from session
// // //       productId,
// // //       quantity,
// // //       totalPrice,
// // //       description,
// // //       title,
// // //       price,
// // //       imageUrl,
// // //       category,
// // //     };

// // //     // Connect to DB and add cart item
// // //     await connectDB();
// // //     const newCartItem = new CartModal(cartItem);
// // //     await newCartItem.save();

// // //     return Response(JSON.stringify({ success: true, message: "Item added to cart!" }), { status: 200 });
// // //   } catch (error) {
// // //     return Response(JSON.stringify({ error: error.message }), { status: 500 });
// // //   }
// // // }










// // // // app/api/add-to-cart/route.js

// // // src/app/api/addToCart.
// // // src/pages/api/addToCart.js
// // import { connectDB } from '@/lib/db/connectDB';
// // import CartModal from '@/lib/models/AddToCart';

// // export default async function handler(req, res) {
// //   await connectDB();

// //   // Check if the request method is POST
// //   if (req.method === 'POST') {
// //     const { productId, userId, quantity } = req.body;
// //     try {
// //       // Create and save the cart item
// //       const cartItem = new CartModal({ productId, userId, quantity });
// //       await cartItem.save();
// //       res.status(201).json({ message: 'Item added to cart', cartItem });
// //     } catch (error) {
// //       res.status(500).json({ error: 'Failed to add item to cart' });
// //     }
// //   } else {
// //     // Reject other HTTP methods
// //     res.setHeader('Allow', ['POST']);
// //     res.status(405).end(`Method ${req.method} Not Allowed`);
// //   }
// // }




// // app/api/addToCart/route.js
// import { connectDB } from '@/lib/db/connectDB';
// // import CartModal from '@/lib/models/AddToCart';
// // POST /api/addToCart
// export async function POST(req, res) {
//   try {
//     await connectDB();
//     const data = await req.json();

//     // Validate data
//     if (!data.productId || !data.userId || !data.quantity) {
//       return res.status(400).json({ message: 'Invalid data' });
//     }

//     const newCartItem = new CartModel({
//       productId: data.productId,
//       userId: data.userId,
//       quantity: data.quantity,
//     });

//     await newCartItem.save();

//     return res.status(200).json({ success: true, message: 'Item added to cart', cartItem: newCartItem });
//   } catch (error) {
//     console.error("Error in addToCart:", error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// }


// // // // app/api/add-to-cart/route.js

import { connectDB } from '@/lib/db/connectDB';
import CartModal from '@/lib/models/AddToCart';

// import { UserModal } from "@/lib/models/UserModal";

// export async function POST(req) {
//   await connectDB();
//   try {
//     const obj = await req.json();

//     // const isUserRequestedBefore = await RequestModal.findOne({
//     //   user: obj.user,
//     // });
//     // console.log("isUserRequestedBefore=>", isUserRequestedBefore);
//     // if (isUserRequestedBefore) {
//     //   return Response.json(
//     //     {
//     //       error: true,
//     //       msg: "You had already applied as a doctor",
//     //     },
//     //     { status: 403 }
//     //   );
//     // }



//     let newCart = await new CartModal({ ...obj });
//     newCart = await newCart.save();

//     return Response.json(
//       {
//         error: false,
//         msg: "Request Registered Successfully",
//         request: newCart,
//       },
//       { status: 201 }
//     );
//   } catch (e) {
//     return Response.json(
//       {
//         error: true,
//         msg: "Something went wrong",
//       },
//       { status: 400 }
//     );
//   }
// }

export async function POST(req) {
  await connectDB();
  try {
    const obj = await req.json();
    console.log("Received Data in API:", obj); // Log the data received in the request

    // Validate required fields
    if (!obj.productId || !obj.quantity || !obj.user) {
      return Response.json(
        {
          error: true,
          msg: "Required fields are missing",
        },
        { status: 400 }
      );
    }

    // Save new cart entry
    let newCart = new CartModal({ ...obj });
    newCart = await newCart.save();

    return Response.json(
      {
        error: false,
        msg: "Request Registered Successfully",
        request: newCart,
      },
      { status: 201 }
    );
  } catch (e) {
    console.error("Error in addToCart API:", e); // Log the error for further debugging
    return Response.json(
      {
        error: true,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function GET(req) {
  await connectDB();
  const carts = await CartModal.find().populate("user");
  return Response.json(
    {
      error: false,
      msg: "Requests fetched Successfully",
      carts,
    },
    { status: 200 }
  );
}

export async function PUT(req) {
  await connectDB();
  try {
    const obj = await req.json();
    let { id, status } = obj;
    const updated = await CartModal.findOneAndUpdate(
      {
        _id: id,
      },
      { status: status }
    ).exec();

    return Response.json(
      {
        error: false,
        msg: "Requests updated Successfully",
        cart: updated,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        error: false,
        msg: "Something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {}