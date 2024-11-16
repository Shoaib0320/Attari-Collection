//app/api/orders/route.js

import { connectDB } from "@/lib/db/connectDB";
import AddProduct from "@/lib/models/AddProduct";
import { OrdersModel } from "@/lib/models/OrdersModal";
import { UserModel } from "@/lib/models/User";

export async function POST(req) {
  await connectDB();

  try {
    const orderData = await req.json();
    const newOrder = new OrdersModel(orderData);
    await newOrder.save();

    return new Response(
      JSON.stringify({
        error: false,
        msg: 'Order placed successfully!',
        order: newOrder,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: true,
        msg: 'Failed to place order.',
      }),
      { status: 400 }
    );
  }
}




// export async function POST(req) {
//   await connectDB();
//   try {
//     const obj = await req.json();

//     // const isUserRequestedBefore = await OrdersModal.findOne({
//     //   user: obj.user,
//     // });
//     // console.log("isUserRequestedBefore=>", isUserRequestedBefore);
//     // if (isUserRequestedBefore) {
//     //   return Response.json(
//     //     {
//     //       error: true,
//     //       msg: "You had already applied as a doctor",
//     //     },
//     //     { status: 403 }
//     //   );
//     // }

//     let newOrder = await new OrdersModel({ ...obj });
//     newOrder = await newOrder.save();

//     return Response.json(
//       {
//         error: false,
//         msg: "Order Added Successfully",
//         order: newOrder,
//       },
//       { status: 201 }
//     );
//   } catch (e) {
//     return Response.json(
//       {
//         error: true,
//         msg: "Something went wrong",
//       },
//       { status: 400 }
//     );
//   }
// }


// export async function GET(req) {
//   await connectDB();
// //   console.log(req);
// //   const query = {};
// //   const status = req?.nextUrl?.searchParams?.get("status");
// //   if (status && status != "all") {
// //     query.status = status;
// //   }

//   const orders = await OrdersModal.find(query).populate("user");
//   return Response.json(
//     {
//       error: false,
//       msg: "Orders fetched Successfully",
//       orders,
//     },
//     { status: 200 }
//   );
// }

export async function GET(req) {
    await connectDB();
  
    const orders = await OrdersModel.find().populate("user");
    return Response.json(
      {
        error: false,
        msg: "Orders fetched Successfully",
        orders,
      },
      { status: 200 }
    );
  }

export async function PUT(req) {
  await connectDB();
  try {
    const obj = await req.json();
    let { id, status } = obj;
    const order = await OrdersModal.findOne({ _id: id });

    await UserModel.findOneAndUpdate({ _id: order.user }, { role: "deliverd" });
    const updated = await OrdersModal.findOneAndUpdate(
      {
        _id: id,
      },
      { status: status }
    ).exec();

    return Response.json(
      {
        error: false,
        msg: "orders updated Successfully",
        order: updated,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        error: false,
        msg: "Something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {}