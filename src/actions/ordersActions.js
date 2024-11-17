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

// export async function getUserOrders(userId) {
//   const query = userId ? `?userId=${userId}` : "";
//   const res = await fetch(`${process.env.BASE_URL}api/orders${query}`);
//   const data = await res.json();
//   return data.orders;
// }

export async function getUserOrders(userId) {
  try {
    const query = userId ? `?userId=${userId}` : "";
    const res = await fetch(`${process.env.BASE_URL}api/orders${query}`);

    if (!res.ok) {
      throw new Error("Failed to fetch user orders.");
    }

    const data = await res.json();
    return data.orders || [];
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return [];
  }
}



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


