// // actions/addCategory.js


// actions/categoryActions.js

export const fetchCategories = async () => {
    const response = await fetch('/api/categories');
    if (!response.ok) {
      throw new Error('Error fetching categories');
    }
    return response.json();
  };
  
  export const addCategory = async (category) => {
    const response = await fetch('/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Error adding category');
    }
  
    return response.json();
  };
 

  // actions/addCategoryActions.js

export const updateCategory = async (category) => {
  try {
    const res = await fetch(`/api/categories/${category._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    if (!res.ok) throw new Error('Failed to update category');
    return await res.json();  // Return updated category data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

  
  export const deleteCategory = async (id) => {
    const response = await fetch(`/api/categories`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Error deleting category');
    }
  
    return response.json();
  };
  