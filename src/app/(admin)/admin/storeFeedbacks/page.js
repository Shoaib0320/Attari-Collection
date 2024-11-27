

import { getStoreFeedbacks } from "@/actions/storeFeedbackAction"
import { StoreFeedbackTable } from "./components/feedback-Table"
import { auth } from "@/app/auth";

export default async function StoreFeedbacks() {

  const session = await auth();
  // Uncomment to enable redirection if not admin
  if (!session || session?.user?.role !== "admin") redirect("/");

  const feedbacks = await getStoreFeedbacks()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-serif text-gray-800 mb-6">Store Feedbacks</h1>
      <StoreFeedbackTable data={feedbacks} />
    </div>
  )
}





// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const feedbacks = [
//   {
//     CutomerName: "Shoaib",
//     User_ID: "Shoaib Raza",
//     Feedback: "Bohot Acha Hai",
//     Order_ID: "9035",
//     Date: "25-11-24",
//   },
//   {
//     CutomerName: "Attari Bilal",
//     User_ID: "Bilal Raza",
//     Feedback: "Bohot Acha Hai",
//     Order_ID: "9095",
//     Date: "26-11-24",
//   },
//   {
//     CutomerName: "Rehman",
//     User_ID: "Abdul Rehman",
//     Feedback: "Bohot Acha Hai",
//     Order_ID: "98035",
//     Date: "28-11-24",
//   },
//   {
//     CutomerName: "Faisal",
//     User_ID: "Faisal Rajput",
//     Feedback: "Bohot Acha Hai",
//     Order_ID: "6837",
//     Date: "21-11-24",
//   },
// ];

// export default function StoreFeedback() {
//   return (
//     <div className="min-h-screen mx-2 sm:mx-4 lg:mx-10 px-1">
//       <div className="flex justify-between items-center my-4">
//         <h1 className="font-bold text-lg sm:text-xl">Store Feedback</h1>
//       </div>

//       {/* Container for scrollable table with fixed height */}
//       <div className="overflow-y-auto max-h-80"> {/* Adjust max-h as needed */}
//         <Table className="min-w-full">
//           <TableCaption>A list of your Feedback.</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="text-center">ID</TableHead>
//               <TableHead className="text-center">Customer Name</TableHead>
//               <TableHead className="text-center">User ID</TableHead>
//               <TableHead className="text-center">Feedback</TableHead>
//               <TableHead className="text-center">Order ID</TableHead>
//               <TableHead className="text-center">Date</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {feedbacks.map((feedback, index) => (
//               <TableRow key={feedback.User_ID}>
//                 <TableCell className="text-center">{index + 1}</TableCell>
//                 <TableCell className="text-center">{feedback.CutomerName}</TableCell>
//                 <TableCell className="text-center">{feedback.User_ID}</TableCell>
//                 <TableCell className="font-medium">{feedback.Feedback}</TableCell>
//                 <TableCell className="font-medium">{feedback.Order_ID}</TableCell>
//                 <TableCell className="font-medium">{feedback.Date}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }