//app/api/orders/route.js

import { auth } from "@/app/auth";
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
    const { id, status } = await req.json();

    // Update the order's status
    const updatedOrder = await OrdersModel.findOneAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return Response.json(
        {
          error: true,
          msg: "Order not found or could not be updated.",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        error: false,
        msg: "Order updated successfully.",
        order: updatedOrder,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error updating order:", err);
    return Response.json(
      {
        error: true,
        msg: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}


export async function DELETE(req) {}