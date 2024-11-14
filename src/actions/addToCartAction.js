// @/actions/addToCartAction.js

"use server";

// export async function addCarts(cartItem) {
//   const res = await fetch("api/addToCart", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(cartItem),
//   });
//   return await res.json();
// }
// src/actions/addToCartAction.js
export const addCarts = async (cartItem) => {
  const response = await fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });
  const data = await response.json();
  console.log(data); // Response after adding to cart
};

export const fetchCart = async () => {
  const response = await fetch('/api/cart');
  const data = await response.json();
  console.log(data); // Cart data
};


// export async function getCarts() {
//   let Carts = await fetch(`${process.env.BASE_URL}api/addToCart`);
//   Carts = Carts.json();

//   return Carts;
// }









