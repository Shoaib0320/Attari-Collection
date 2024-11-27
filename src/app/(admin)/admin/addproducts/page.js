import { auth } from "@/app/auth";
import AddProductsPage from "../components/MainAddProduct";

const AddProducts = async () => {

  const session = await auth();
  // Uncomment to enable redirection if not admin
  if (!session || session?.user?.role !== "admin") redirect("/");

  // const [products, setProducts] = useState([]); // Initialized as an empty array
  // const [categories, setCategories] = useState([]);
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   category: "",
  //   price: "",
  //   imageUrl: "",
  // });
  // const [editingProduct, setEditingProduct] = useState(null);
  // const [isProductDialogOpen, setProductDialogOpen] = useState(false);
  // const [loading, setLoading] = useState(false); // Loader state

  // const loadCategories = async () => {
  //   setLoading(true); // Set loading true when fetching data
  //   try {
  //     const data = await fetchCategories();
  //     console.log("Fetched categories:", data);
  //     setCategories(data.categories);
  //   } catch (error) {
  //     console.error("Error loading categories:", error);
  //   } finally {
  //     setLoading(false); // Set loading false when done
  //   }
  // };


  // useEffect(() => {
  //   loadCategories();
  // }, []);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     setLoading(true); // Set loading true when fetching data
  //     try {
  //       const data = await fetchProducts();
  //       setProducts(data.products || []); // Ensure data.products is always an array
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false); // Set loading false when done
  //     }
  //   };

  //   loadProducts();
  // }, []); // Only fetch products on initial mount

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Set loading true when submitting form
  //   try {
  //     if (editingProduct) {
  //       const updatedProduct = await updateProduct({
  //         ...formData,
  //         _id: editingProduct._id,
  //       });
  //       // Optimistic UI update: Immediately update UI before request completes
  //       setProducts((prevProducts) =>
  //         (prevProducts || []).map((product) =>
  //           product._id === updatedProduct._id ? updatedProduct : product
  //         )
  //       );
  //       setEditingProduct(null);
  //     } else {
  //       const newProduct = await addProduct(formData);
  //       // Optimistic UI update: Immediately update UI before request completes
  //       setProducts((prevProducts) => [...(prevProducts || []), newProduct]);
  //     }
  //     setFormData({
  //       title: "",
  //       description: "",
  //       category: "",
  //       price: "",
  //       imageUrl: "",
  //     });
  //     setProductDialogOpen(false);
  //   } catch (error) {
  //     console.error("Error adding/updating product:", error);
  //   } finally {
  //     setLoading(false); // Set loading false when done
  //   }
  // };

  // const handleDelete = async (productId) => {
  //   setLoading(true); // Set loading true when deleting product
  //   try {
  //     await deleteProduct(productId);
  //     // Optimistic UI update: Immediately update UI before request completes
  //     setProducts((prevProducts) =>
  //       (prevProducts || []).filter((product) => product._id !== productId)
  //     );
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   } finally {
  //     setLoading(false); // Set loading false when done
  //   }
  // };

  // const handleEdit = (product) => {
  //   setEditingProduct(product);
  //   setFormData({
  //     title: product.title,
  //     description: product.description,
  //     category: product?.category?._id, // Change here: Set the category ID, not the title
  //     price: product.price,
  //     imageUrl: product.imageUrl,
  //   });
  //   setProductDialogOpen(true);
  // };
  

  return (
    <AddProductsPage />
  );
};

export default AddProducts;
