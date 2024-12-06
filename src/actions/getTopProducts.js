// 'use server'

// import { connectDB } from "@/lib/db/connectDB";
// import { OrdersModel } from "@/lib/models/OrdersModal";

// export async function getTopProducts() {
//     await connectDB();
  
//     try {
//       const topProducts = await OrdersModel.aggregate([
//         { $unwind: "$items" },
//         { 
//           $group: { 
//             _id: "$items.productId", 
//             totalOrders: { $sum: "$items.quantity" },
//             name: { $first: "$items.title" } 
//           } 
//         },
//         { $sort: { totalOrders: -1 } },
//         { $limit: 4 },
//         { $project: { name: "$name", value: "$totalOrders" } }
//       ]);
  
//       console.log("Aggregation Result:", topProducts); // Debugging
//       return topProducts;
//     } catch (error) {
//       console.error("Failed to fetch top products:", error);
//       return [];
//     }
//   }
  




'use server'

import { connectDB } from "@/lib/db/connectDB";
import { OrdersModel } from "@/lib/models/OrdersModal";

export async function getTopProducts(month) {
  await connectDB();

  try {
    // Parse month into a range for matching
    const startDate = new Date(new Date().getFullYear(), month - 1, 1);
    const endDate = new Date(new Date().getFullYear(), month, 0);

    const topProducts = await OrdersModel.aggregate([
      // Match orders within the specified month
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lt: endDate,
          },
        },
      },
      // Decompose the `items` array into individual documents
      { $unwind: "$items" },
      // Group by productId and calculate total orders
      {
        $group: {
          _id: "$items.productId",
          totalOrders: { $sum: "$items.quantity" },
          name: { $first: "$items.title" },
        },
      },
      // Sort by total orders in descending order
      { $sort: { totalOrders: -1 } },
      // Limit to top 4 products
      { $limit: 4 },
      // Format the output
      {
        $project: {
          name: "$name",
          value: "$totalOrders",
        },
      },
    ]);

    console.log(`Top Products for Month ${month}:`, topProducts); // Debugging
    return topProducts;
  } catch (error) {
    console.error("Failed to fetch top products:", error);
    return [];
  }
}
