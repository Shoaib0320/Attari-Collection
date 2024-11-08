"use server";

import { revalidatePath } from "next/cache";

export async function addUsers(data) {
  let add = await fetch(`${process.env.BASE_URL}api/requests`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  add = add.json();

  return add;
}

export async function getUsers() {
  let Users = await fetch(`${process.env.BASE_URL}api/requests`);
  Users = Users.json();

  return Users;
}

export async function updateUsers(id, status) {
  let Users = await fetch(`${process.env.BASE_URL}api/requests`, {
    method: "PUT",
    body: JSON.stringify({ id, status }),
  });
  Users = Users.json();
  revalidatePath("/admin/users");
  return Users;
}