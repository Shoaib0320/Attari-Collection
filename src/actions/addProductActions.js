//@/actions/addProductAction.js

  export async function fetchProducts() {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    }

  export async function addProduct(product) {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Failed to add product");
    return response.json();
  }
  
  export async function updateProduct(product) {
    const response = await fetch("/api/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Failed to update product");
    return response.json();
  }
  
  export async function deleteProduct(productId) {
    const response = await fetch(`/api/products?id=${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete product");
    return response.json();
  }
  