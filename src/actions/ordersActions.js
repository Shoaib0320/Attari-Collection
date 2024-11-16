// @/actions/ordersAction.js

"use server";

import { revalidatePath } from "next/cache";

export async function addOrders(orderData) {
  let add = await fetch(`${process.env.BASE_URL}api/orders`, {
    method: "POST",
    body: JSON.stringify(orderData),
  });
  add = add.json();

  return add;
}


// Fetch orders from the API
export async function getOrders() {
  const res = await fetch(`${process.env.BASE_URL}api/orders`)
  const data = await res.json()
  return data.orders
}

export async function getUserOrders(userId) {
  const query = userId ? `?userId=${userId}` : "";
  const res = await fetch(`${process.env.BASE_URL}api/orders${query}`);
  const data = await res.json();
  return data.orders;
}

// export async function getUserOrders(status = "pending") {
//   const url = `${process.env.BASE_URL}/api/orders?status=${status}`;
//   const response = await fetch(url, { cache: 'no-store' });
//   if (!response.ok) {
//     throw new Error('Failed to fetch orders');
//   }
//   return response.json();
// }

// export async function getUserOrders(userId, status = "all") {
//   const url = `${process.env.BASE_URL}api/orders?userId=${userId}&status=${status}`;
//   try {
//     const response = await fetch(url, {
//       cache: "no-cache", // Ensure fresh data
//     });

//     if (!response.ok) {
//       throw new Error(`Error fetching orders: ${response.statusText}`);
//     }

//     const data = await response.json();

//     if (data.error) {
//       throw new Error(data.msg || "Error fetching user orders.");
//     }

//     return data.orders || []; // Return orders or an empty array if no orders
//   } catch (error) {
//     console.error("Error in getUserOrders:", error);
//     return []; // Return empty array on error
//   }
// }



// export async function updateOrders(id, status) {
//   let Orders = await fetch(`${process.env.BASE_URL}api/orders`, {
//     method: "PUT",
//     body: JSON.stringify({ id, status }),
//   });
//   Orders = Orders.json();
//   revalidatePath("/admin/orders");
//   return Orders;
// }

export async function updateOrders(id, status) {
  try {
    const response = await fetch(`${process.env.BASE_URL}api/orders`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    const result = await response.json();
    revalidatePath("/admin/orders");

    // if (!response.ok) {
    //   throw new Error(result.msg || "Failed to update order.");
    // }

    return result;
  } catch (error) {
    console.error("Error in updateOrders:", error);
    throw error;
  }
}
