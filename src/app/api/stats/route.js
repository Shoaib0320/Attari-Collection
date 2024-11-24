// // import { connectDB } from "@/lib/db/connectDB";
// // import AddProduct from "@/lib/models/AddProduct";
// // import { OrdersModel } from "@/lib/models/OrdersModal";
// // import { FeedbackModal } from "@/lib/models/ProductFeedback";
// // import { StoreFeedbackModal } from "@/lib/models/StoreFeedback";
// // import { UserModel } from "@/lib/models/User";

// // // Export the GET method as a named export
// // export async function GET(req, res) {
// //   try {
// //     await connectDB();

// //     const totalProducts = await AddProduct.countDocuments();
// //     const totalOrders = await OrdersModel.countDocuments();
// //     const totalUsers = await UserModel.countDocuments();
// //     const totalProductsFeedbacks = await FeedbackModal.countDocuments();
// //     const totalStoreFeedbacks = await StoreFeedbackModal.countDocuments();

// //     res.status(200).json({
// //       totalProducts,
// //       totalOrders,
// //       totalUsers,
// //       totalProductsFeedbacks,
// //       totalStoreFeedbacks,
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Error fetching stats" });
// //   }
// // }










// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/db/connectDB';
// import { OrdersModel } from '@/lib/models/OrdersModal';
// import AddProduct from '@/lib/models/AddProduct';
// import { FeedbackModal } from '@/lib/models/ProductFeedback';
// import { UserModel } from '@/lib/models/User';
// import { StoreFeedbackModal } from '@/lib/models/StoreFeedback';

// export async function GET() {
//   await connectDB();

//   try {
//     const [
//       totalOrders,
//       totalProducts,
//       totalStoreFeedbacks,
//       totalProductFeedbacks,
//       totalUsers
//     ] = await Promise.all([
//       OrdersModel.countDocuments(),
//       AddProduct.countDocuments(),
//       StoreFeedbackModal.countDocuments(),
//       FeedbackModal.countDocuments(),
//       UserModel.countDocuments()
//     ]);

//     const totalRevenue = await Order.aggregate([
//       {
//         $group: {
//           _id: null,
//           total: { $sum: '$totalAmount' }
//         }
//       }
//     ]);

//     return NextResponse.json({
//       totalOrders,
//       totalProducts,
//       totalStoreFeedbacks,
//       totalProductFeedbacks,
//       totalUsers,
//       totalRevenue: totalRevenue[0]?.total || 0
//     });
//   } catch (error) {
//     console.error('Error fetching dashboard stats:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connectDB';
import { OrdersModel } from '@/lib/models/OrdersModal';
import AddProduct from '@/lib/models/AddProduct';
import { FeedbackModal } from '@/lib/models/ProductFeedback';
import { UserModel } from '@/lib/models/User';
import { StoreFeedbackModal } from '@/lib/models/StoreFeedback';

export async function GET() {
  await connectDB();

  try {
    const [
      totalOrders,
      totalProducts,
      totalStoreFeedbacks,
      totalProductFeedbacks,
      totalUsers
    ] = await Promise.all([
      OrdersModel.countDocuments(),
      AddProduct.countDocuments(),
      StoreFeedbackModal.countDocuments(),
      FeedbackModal.countDocuments(),
      UserModel.countDocuments()
    ]);

    const totalRevenue = await OrdersModel.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$totalAmount' }
        }
      }
    ]);

    return NextResponse.json({
      totalOrders,
      totalProducts,
      totalStoreFeedbacks,
      totalProductFeedbacks,
      totalUsers,
      totalRevenue: totalRevenue[0]?.total || 0
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

