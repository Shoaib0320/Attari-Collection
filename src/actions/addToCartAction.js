// // @/actions/addToCartAction.js

// "use server";

// export async function addCarts(data) {
//   let addCart = await fetch(`${process.env.BASE_URL}api/addToCart`, {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
//   addCart = addCart.json();

//   return addCart;
// }

// export async function getCarts() {
//   let Carts = await fetch(`${process.env.BASE_URL}api/addToCart`);
//   Carts = Carts.json();

//   return Carts;
// }










"use server";

// export async function addCarts(data) {
//     try {
//         const response = await fetch(`${process.env.BASE_URL}/api/addToCart`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error("Failed to add item to cart");
//         }

//         return await response.json();
//     } catch (error) {
//         console.error("Error in addCarts:", error);
//         return { error: true, msg: "Could not add to cart" };
//     }
// }

export const addToCart = async (itemId, quantity, userId) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/addToCart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId, quantity, userId }),
    });

    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};


export async function getCarts() {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/addToCart`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch cart items");
        }

        return await response.json();
    } catch (error) {
        console.error("Error in getCarts:", error);
        return { error: true, msg: "Could not retrieve cart items" };
    }
}
