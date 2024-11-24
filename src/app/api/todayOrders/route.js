// // // import { NextResponse } from 'next/server';
// // // import { connectDB } from '@/lib/db/connectDB';
// // // import { OrdersModel } from '@/lib/models/OrdersModal';

// // // export async function GET() {
// // //   await connectDB();

// // //   try {
// // //     const today = new Date();
// // //     today.setHours(0, 0, 0, 0);

// // //     const orders = await OrdersModel.find({
// // //       createdAt: { $gte: today }
// // //     }).sort({ createdAt: -1 }).limit(10);

// // //     return NextResponse.json(orders);
// // //   } catch (error) {
// // //     console.error('Error fetching today\'s orders:', error);
// // //     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
// // //   }
// // // }




// // import { NextResponse } from 'next/server';
// // import { connectDB } from '@/lib/db/connectDB';
// // import { OrdersModel } from '@/lib/models/OrdersModal';

// // export async function GET() {
// //   await connectDB();

// //   try {
// //     const today = new Date();
// //     today.setHours(0, 0, 0, 0);

// //     // Fetch today's orders with the status (Pending, Cancelled, Delivered)
// //     const orders = await OrdersModel.find({
// //       createdAt: { $gte: today }
// //     }).sort({ createdAt: -1 }).limit(10);

// //     return NextResponse.json(orders);
// //   } catch (error) {
// //     console.error('Error fetching today\'s orders:', error);
// //     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
// //   }
// // }

// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/db/connectDB';
// import { OrdersModel } from '@/lib/models/OrdersModal';

// export async function GET() {
//   await connectDB();

//   try {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const orders = await OrdersModel.find({
//       createdAt: { $gte: today }  // only fetch orders created today
//     }).sort({ createdAt: -1 }).limit(10);

//     return NextResponse.json(orders);
//   } catch (error) {
//     console.error('Error fetching today\'s orders:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connectDB';
import { OrdersModel } from '@/lib/models/OrdersModal';

export async function GET() {
  await connectDB();

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Populate user data and fetch today's orders
    const orders = await OrdersModel.find({
      createdAt: { $gte: today }
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('user', 'firstName email');  // Populate user with firstName and email

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching today\'s orders:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
