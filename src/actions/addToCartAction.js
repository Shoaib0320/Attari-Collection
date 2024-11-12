// @/actions/addToCartAction.js

"use server";

export async function addCarts(data) {
  let addCart = await fetch(`${process.env.BASE_URL}api/addToCart`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  addCart = addCart.json();

  return addCart;
}

export async function getCarts() {
  let Carts = await fetch(`${process.env.BASE_URL}api/addToCart`);
  Carts = Carts.json();

  return Carts;
}
