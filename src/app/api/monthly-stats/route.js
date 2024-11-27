// // import { NextResponse } from 'next/server';
// // import { connectDB } from '@/lib/db/connectDB';
// // import { OrdersModel } from '@/lib/models/OrdersModal';

// // export async function GET(request) {
// //   const { searchParams } = new URL(request.url);
// //   const month = searchParams.get('month');

// //   if (!month) {
// //     return NextResponse.json({ error: 'Month parameter is required' }, { status: 400 });
// //   }

// //   let connection = null;

// //   try {
// //     await connectDB()

// //     const startDate = new Date(`${month}-01T00:00:00.000Z`);
// //     const endDate = new Date(startDate);
// //     endDate.setMonth(endDate.getMonth() + 1);

// //     console.log(`Querying for month: ${month}, start: ${startDate}, end: ${endDate}`);

// //     const [monthlyStats] = await OrdersModel.aggregate([
// //       {
// //         $match: {
// //           createdAt: { $gte: startDate, $lt: endDate }
// //         }
// //       },
// //       {
// //         $group: {
// //           _id: null,
// //           totalRevenue: { $sum: '$totalAmount' },
// //           totalOrders: { $sum: 1 },
// //           pendingOrders: {
// //             $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] }
// //           },
// //           deliveredOrders: {
// //             $sum: { $cond: [{ $eq: ['$status', 'delivered'] }, 1, 0] }
// //           },
// //           cancelledOrders: {
// //             $sum: { $cond: [{ $eq: ['$status', 'cancelled'] }, 1, 0] }
// //           }
// //         }
// //       }
// //     ]);

// //     console.log('Query result:', monthlyStats);

// //     return NextResponse.json(monthlyStats || {
// //       totalRevenue: 0,
// //       totalOrders: 0,
// //       pendingOrders: 0,
// //       deliveredOrders: 0,
// //       cancelledOrders: 0
// //     });
// //   } catch (error) {
// //     console.error('Error fetching monthly stats:', error);
// //     return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
// //   } finally {
// //     if (connection) {
// //       await mongoose.disconnect();
// //       console.log('Disconnected from MongoDB');
// //     }
// //   }
// // }




// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/db/connectDB';
// import { OrdersModel } from '@/lib/models/OrdersModal';

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const month = searchParams.get('month');
//   const year = new Date().getFullYear();

//   await connectDB();

//   const startDate = new Date(year, parseInt(month) - 1, 1);
//   const endDate = new Date(year, parseInt(month), 0);

//   const orders = await OrdersModel.find({
//     createdAt: { $gte: startDate, $lte: endDate }
//   });

//   const totalOrders = orders.length;
//   const pendingOrders = orders.filter(order => order.status === 'pending').length;
//   const deliveredOrders = orders.filter(order => order.status === 'delivered').length;
//   const cancelledOrders = orders.filter(order => order.status === 'cancelled').length;

//   const totalEarning = orders
//     .filter(order => order.status === 'delivered')
//     .reduce((sum, order) => sum + order.totalAmount, 0);

//   return NextResponse.json({
//     totalOrders,
//     pendingOrders,
//     deliveredOrders,
//     cancelledOrders,
//     totalEarning
//   });
// }





import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connectDB';
import { OrdersModel } from '@/lib/models/OrdersModal';

export async function GET(request) {
  await connectDB();

  const searchParams = request.nextUrl.searchParams;
  const month = parseInt(searchParams.get('month') || '');

  if (isNaN(month) || month < 1 || month > 12) {
    return NextResponse.json({ error: 'Invalid month' }, { status: 400 });
  }

  const year = new Date().getFullYear();
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  try {
    const [monthlyStats] = await OrdersModel.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lte: endDate }
        }
      },
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          deliveredOrders: {
            $sum: { $cond: [{ $eq: ["$status", "delivered"] }, 1, 0] }
          },
          cancelledOrders: {
            $sum: { $cond: [{ $eq: ["$status", "cancelled"] }, 1, 0] }
          },
          totalAmount: {
            $sum: {
              $cond: [
                { $eq: ["$status", "delivered"] },
                "$totalAmount",
                0
              ]
            }
          }
        }
      }
    ]);

    if (!monthlyStats) {
      return NextResponse.json({
        totalOrders: 0,
        deliveredOrders: 0,
        cancelledOrders: 0,
        totalAmount: 0
      });
    }

    return NextResponse.json(monthlyStats);
  } catch (error) {
    console.error('Error fetching monthly stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

