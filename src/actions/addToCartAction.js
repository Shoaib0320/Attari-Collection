// // @/actions/addToCartAction.js

// "use server";

// actions/addToCartAction.js

export async function addCarts(cartItem) {
  try {
    const response = await fetch('/api/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
}


// actions/getCartsAction.js

export async function getCarts(userId) {
  try {
    const response = await fetch(`/api/addToCart?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
}



// export async function deleteCarts(cartItemId) {
//   try {
//     const response = await fetch(`/api/addToCart`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ cartItemId }),  // Passing the cart item ID to delete
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return { success: false, message: error.message };
//   }
// }


// @/actions/addToCartAction.js

export async function deleteCarts(itemId) {
  try {
    const response = await fetch('/api/addToCart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
}
