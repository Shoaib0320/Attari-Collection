'use server'

import { connectDB } from "@/lib/db/connectDB";
import { OrdersModel } from "@/lib/models/OrdersModal";

export async function getTopProducts() {
    await connectDB();
  
    try {
      const topProducts = await OrdersModel.aggregate([
        { $unwind: "$items" },
        { 
          $group: { 
            _id: "$items.productId", 
            totalOrders: { $sum: "$items.quantity" },
            name: { $first: "$items.title" } 
          } 
        },
        { $sort: { totalOrders: -1 } },
        { $limit: 4 },
        { $project: { name: "$name", value: "$totalOrders" } }
      ]);
  
      console.log("Aggregation Result:", topProducts); // Debugging
      return topProducts;
    } catch (error) {
      console.error("Failed to fetch top products:", error);
      return [];
    }
  }
  