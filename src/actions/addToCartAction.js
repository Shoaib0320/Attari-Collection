// // addToCartAction.js
// export const addToCart = (product, quantity) => async (dispatch, getState) => {
//     try {
//       const { user } = getState().auth; // Ensure user is available
//       if (!user) throw new Error('User must be logged in');
  
//       const cartItem = {
//         productId: product._id,
//         userId: user._id,
//         quantity: quantity || 1, // Default to 1 if no quantity is specified
//       };
  
//       // Make API request to add item to cart
//       const response = await fetch("http://localhost:3000/api/addToCart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(cartItem),
//       });
  
//       const data = await response.json();
//       if (response.ok) {
//         dispatch({
//           type: "CART_ADD_ITEM",
//           payload: data,
//         });
//       } else {
//         throw new Error(data.message || 'Failed to add to cart');
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       dispatch({
//         type: "CART_ADD_ITEM_FAILED",
//         payload: error.message,
//       });
//     }
//   };
  
//@/actions/addToCartAction.js

"use server";

import { revalidatePath } from "next/cache";

export async function addCarts(data) {
  let addCart = await fetch(`${process.env.BASE_URL}api/addToCart`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  addCart = addCart.json();

  return addCart;
}

export async function getCarts() {
  let Carts = await fetch(`${process.env.BASE_URL}/api/addToCart`);
  Carts = Carts.json();

  return Carts;
}

// export async function updateCarts(id, status) {
//   let Users = await fetch(`${process.env.BASE_URL}api/addToCart`, {
//     method: "PUT",
//     body: JSON.stringify({ id, status }),
//   });
//   Users = Users.json();
//   revalidatePath("/admin/users");
//   return Users;
// }







