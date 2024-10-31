import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const orders = [
  {
    Customer: "Shoaib",
    User_ID: "Shoaib0320",
    Date: "29-11-24",
    TotalPKR: "28000",
  },
  {
    Customer: "Shoaib Raza",
    User_ID: "Shoaib0370",
    Date: "28-11-24",
    TotalPKR: "2800",
  },
  {
    Customer: "Shoaib Raza Attari",
    User_ID: "Shoaib0308",
    Date: "27-11-24",
    TotalPKR: "24000",
  },
  // Add more orders here for testing scrolling
];

export default function Orders() {
  return (
    <div className="min-h-screen mx-2 sm:mx-4 lg:mx-10 px-1">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-lg sm:text-xl">Orders</h1>
      </div>

      {/* Container for scrollable table with fixed height */}
      <div className="overflow-y-auto max-h-80"> {/* Adjust max-h as needed */}
        <Table className="min-w-full">
          <TableCaption>A list of your Orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">ID</TableHead>
              <TableHead className="text-center">Customer</TableHead>
              <TableHead className="text-center">User ID</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Total PKR</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={order.User_ID}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="text-center">{order.Customer}</TableCell>
                <TableCell className="text-center">{order.User_ID}</TableCell>
                <TableCell className="text-center">{order.Date}</TableCell>
                <TableCell className="text-center">{order.TotalPKR}</TableCell>
                <TableCell className="flex justify-center gap-2 flex-wrap">
                  <Button 
                    className={'bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto'} 
                    size="sm"
                    >
                      View Details
                  </Button>
                  <Button 
                    className={'bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto'} 
                    size="sm"
                    >
                      Delete
                    </Button>
                  <Button 
                    className={'bg-gray-800 text-white hover:bg-gray-300 hover:text-black transition w-full sm:w-auto'}                   
                    size="sm"
                    >
                      Mark As Delivered
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
