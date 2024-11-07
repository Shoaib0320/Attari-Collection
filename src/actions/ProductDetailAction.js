// Fetch a single product by ID
export async function fetchProductById(productId) {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) throw new Error("Failed to fetch product details");
    return response.json();
  }
  
  // Add product to cart action
  export async function addToCart(cartData) {
    const response = await fetch('/api/addToCart', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartData),
    });
    if (!response.ok) throw new Error("Failed to add to cart");
    return response.json();
  }
  