// lib/actions/productDetailAction.js

export async function fetchProductDetail(id) {
  const response = await fetch('/api/products/${product._id}' , { method: 'GET' });
  if (!response.ok) {
    return {}; // or a default object
  }
  return await response.json();
}

//  async function fetchProductDetail(id) {
//   try {
//     const response = await fetch(`/api/products/${id}`, { method: 'GET' });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Failed to fetch product details');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching product details:', error);
//     throw error;
//   }
// }

export async function updateProduct(id, updatedData) {
  try {
    const response = await fetch(`/api/products/${product._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to update product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}
