//app/api/orders/route.js

import { auth } from "@/app/auth";
import { connectDB } from "@/lib/db/connectDB";
import AddProduct from "@/lib/models/AddProduct";
import { OrdersModel } from "@/lib/models/OrdersModal";
import { UserModel } from "@/lib/models/User";
import { createTransport } from "nodemailer";


export async function POST(req) {
  await connectDB();

  try {
    const orderData = await req.json();

    // User data fetch karna from database
    const user = await UserModel.findById(orderData.user);
    if (!user) {
      return new Response(
        JSON.stringify({
          error: true,
          msg: "User not found",
        }),
        { status: 400 }
      );
    }

    // Order data save karna
    const newOrder = new OrdersModel(orderData);
    await newOrder.save();

    // Email Logic
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const totalAmount = orderData.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const mailOptions = {
      from: '"Attari Collection" <attaricollection@gmail.com>',
      to: "shoaibrazamemon170@gmail.com", // Admin email
      subject: "New Order Placed",
      html: `
        <h1>New Order Details</h1>
        <p><strong>Customer Name:</strong> ${user.firstName} ${user.lastName}</p>
        <p><strong>Phone:</strong> ${orderData.number}</p>
        <p><strong>Address:</strong> ${orderData.address}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Total Items:</strong> ${orderData.items.length}</p>
        <p><strong>Total Amount:</strong> PKR ${totalAmount.toFixed(2)}</p>
        <h2>Ordered Items:</h2>
        <ul>
          ${orderData.items
            .map(
              (item) => `
            <li>
              <strong>${item.title}</strong> - Quantity: ${item.quantity}, Price: PKR ${item.price.toFixed(2)} - Category: ${item.category} 
            </li>
          `
            )
            .join("")}
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        error: false,
        msg: "Order placed and email sent successfully!",
        order: newOrder,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: true,
        msg: "Failed to place order or send email.",
      }),
      { status: 400 }
    );
  }
}

// export async function GET(req) {
//     await connectDB();
  
//     const orders = await OrdersModel.find().populate("user");
//     return Response.json(
//       {
//         error: false,
//         msg: "Orders fetched Successfully",
//         orders,
//       },
//       { status: 200 }
//     );
//   }


// export async function GET(req) {
//   await connectDB();

//   const { searchParams } = new URL(req.url);
//   const userId = searchParams.get("userId");
//   const status = req?.nextUrl?.searchParams?.get("status");

//   const stats = {
//     accepted: await OrdersModel.find({
//       status: "delivered",
//     }).countDocuments(),
//     cancelled: await OrdersModel.find({
//       status: "cancelled",
//     }).countDocuments(),
//     pending: await OrdersModel.find({
//       status: "pending",
//     }).countDocuments(),
//   };

//   try {
//     let query = {};
//     if (userId) {
//       query = { user: userId }; // Assuming `user` is the field referencing the user in your Orders model
//     }

//     const orders = await OrdersModel.find(query).populate("user");
//     return new Response(
//       JSON.stringify({
//         error: false,
//         msg: "Orders fetched successfully",
//         orders,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return new Response(
//       JSON.stringify({
//         error: true,
//         msg: "Failed to fetch orders.",
//       }),
//       { status: 500 }
//     );
//   }
// }


export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const status = searchParams.get("status");

  const stats = {
    delivered: await OrdersModel.find({ status: "delivered" }).countDocuments(),
    cancelled: await OrdersModel.find({ status: "cancelled" }).countDocuments(),
    pending: await OrdersModel.find({ status: "pending" }).countDocuments(),
  };

  try {
    let query = {};
    if (userId) {
      query = { user: userId }; // Filter by user if provided
    }
    if (status) {
      query.status = status; // Filter by status if provided
    }

    const orders = await OrdersModel.find(query).populate("user"); // Fetch the orders based on the query

    return new Response(
      JSON.stringify({
        error: false,
        msg: "Orders fetched successfully",
        orders,
        stats, // Return the calculated stats
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new Response(
      JSON.stringify({
        error: true,
        msg: "Failed to fetch orders.",
      }),
      { status: 500 }
    );
  }
}


// export async function PUT(req) {
//   await connectDB();
//   try {
//     const { id, status } = await req.json();

//     // Update the order's status
//     const updatedOrder = await OrdersModel.findOneAndUpdate(
//       { _id: id },
//       { status },
//       { new: true }
//     );

//     if (!updatedOrder) {
//       return Response.json(
//         {
//           error: true,
//           msg: "Order not found or could not be updated.",
//         },
//         { status: 404 }
//       );
//     }

//     return Response.json(
//       {
//         error: false,
//         msg: "Order updated successfully.",
//         order: updatedOrder,
//       },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Error updating order:", err);
//     return Response.json(
//       {
//         error: true,
//         msg: "Something went wrong.",
//       },
//       { status: 500 }
//     );
//   }
// }

export async function PUT(req) {
  await connectDB();
  try {
    const { id, status } = await req.json();

    // Find the order and populate the user data
    const order = await OrdersModel.findOne({ _id: id }).populate("user");
    
    if (!order) {
      return Response.json(
        {
          error: true,
          msg: "Order not found.",
        },
        { status: 404 }
      );
    }

    // Update the order's status
    order.status = status;
    await order.save();

    // Get user details from the order
    const user = order.user;

    // Email logic
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const totalAmount = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Email content for the user
    const mailOptions = {
      from: '"Attari Collection" <attaricollection@gmail.com>',
      to: user.email, // Send email to the user's email
      subject: `Your Order is Marked as ${status}`,
      html: `
        <h1>Order Status Update</h1>
        <p><strong>Dear ${user.firstName} ${user.lastName},</strong></p>
        <p>Your order has been marked as <strong>${status}</strong>.</p>
        <p><strong>Order Details:</strong></p>
        <p><strong>Phone:</strong> ${order.number}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>Total Items:</strong> ${order.items.length}</p>
        <p><strong>Total Amount:</strong> PKR ${totalAmount.toFixed(2)}</p>
        <h2>Ordered Items:</h2>
        <ul>
          ${order.items
            .map(
              (item) => `
            <li>
              <strong>${item.title}</strong> - Quantity: ${item.quantity}, Price: PKR ${item.price.toFixed(2)} - Category: ${item.category}
            </li>
          `
            )
            .join("")}
        </ul>
      `,
    };

    // Send email to the user
    await transporter.sendMail(mailOptions);

    return Response.json(
      {
        error: false,
        msg: `Order marked as ${status} and email sent successfully.`,
        order,
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