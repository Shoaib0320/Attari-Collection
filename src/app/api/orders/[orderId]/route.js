import { connectDB } from "@/lib/db/connectDB";
import { OrdersModel } from "@/lib/models/OrdersModal";

export async function DELETE(req, { params }) {
  await connectDB();

  const { orderId } = params;

  try {
    const order = await OrdersModel.findById(orderId);

    if (!order) {
      return new Response(
        JSON.stringify({
          error: true,
          msg: "Order not found",
        }),
        { status: 404 }
      );
    }

    if (order.status !== 'pending') {
      return new Response(
        JSON.stringify({
          error: true,
          msg: "Only pending orders can be deleted",
        }),
        { status: 400 }
      );
    }

    await OrdersModel.findByIdAndDelete(orderId);

    return new Response(
      JSON.stringify({
        error: false,
        msg: "Order deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting order:", error);
    return new Response(
      JSON.stringify({
        error: true,
        msg: "Failed to delete order",
      }),
      { status: 500 }
    );
  }
}

