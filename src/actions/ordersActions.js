// @/actions/ordersAction.js

"use server";

import { revalidatePath } from "next/cache";

// export async function addOrders(orderData) {
//   let add = await fetch(`${process.env.BASE_URL}api/orders`, {
//     method: "POST",
//     body: JSON.stringify(orderData),
//   });
//   add = add.json();

//   return add;
// }

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

export async function updateOrders(id, status) {
  let Orders = await fetch(`${process.env.BASE_URL}api/orders`, {
    method: "PUT",
    body: JSON.stringify({ id, status }),
  });
  Orders = Orders.json();
  revalidatePath("/admin/orders");
  return Orders;
}