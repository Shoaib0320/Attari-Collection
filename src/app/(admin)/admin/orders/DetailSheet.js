import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function DetailSheet({ order }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Details</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Order Details</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <div className="flex flex-col items-center gap-4 mt-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={order.user?.picture}
                alt={`${order.user?.firstName}`}
              />
              <AvatarFallback>
                {order.user?.firstName?.charAt(0)}
                {order.user?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h1 className="font-bold text-2xl text-center">
              {`${order.user?.firstName} ${order.user?.lastName}`}
            </h1>
          </div>
          <h3 className="font-bold">Customer: {order.user?.firstName}</h3>
          <p>Order ID: {order._id}</p>
          <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
          <p>Status: {order.status}</p>
          <p>Address: {order.address}</p>
          <p>Phone: {order.number}</p>
          <h1>Total Amount : PKR: {order.totalAmount}</h1>
          <h4 className="font-bold mt-4">Products:</h4>
          <ul>
            {order.items.map((item, index) => (
              <div className="bg-gray-300 text-black my-3 p-3" key={index}>
                <div className="flex justify-between items-center gap-2">
                  <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full"/>
                    {item.title} - Quantity: {item.quantity} - Price: PKR {item.price}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default DetailSheet;
