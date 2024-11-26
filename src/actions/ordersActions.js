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


// // Fetch orders from the API
// export async function getOrders() {
//   const res = await fetch(`${process.env.BASE_URL}api/orders`)
//   const data = await res.json()
//   return (data.orders)

// }

// Fetch orders from the API
// export async function getOrders() {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}api/orders`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch orders.");
//     }

//     const data = await res.json();

//     return {
//       stats: {
//         delivered: data.stats.delivered || 0,
//         cancelled: data.stats.cancelled || 0,
//         pending: data.stats.pending || 0,
//       },
//       orders: data.orders || [], // Assuming data.orders is the list of orders
//     };
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return {
//       stats: { delivered: 0, cancelled: 0, pending: 0 },
//       orders: [],
//     };
//   }
// }

export async function getOrders(status = 'all') {
  try {
    const url = status === 'all' 
      ? `${process.env.BASE_URL}api/orders`
      : `${process.env.BASE_URL}api/orders?status=${status}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch orders.");
    }

    const data = await res.json();

    return {
      stats: {
        delivered: data.stats.delivered || 0,
        cancelled: data.stats.cancelled || 0,
        pending: data.stats.pending || 0,
      },
      orders: data.orders || [],
    };
  } catch (error) {
    console.error("Error fetching orders:", error);
    return {
      stats: { delivered: 0, cancelled: 0, pending: 0 },
      orders: [],
    };
  }
}


export async function getUserOrders(userId) {
  const query = userId ? `?userId=${userId}` : "";
  const res = await fetch(`${process.env.BASE_URL}api/orders${query}`);
  const data = await res.json();
  return data.orders;
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


export async function deleteOrder(orderId) {
  const res = await fetch(`${process.env.BASE_URL}api/orders/${orderId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(data.msg);
  }
  return data;
}
