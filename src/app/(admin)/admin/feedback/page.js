// // import {
// //   Table,
// //   TableBody,
// //   TableCaption,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";

// // const feedbacks = [
// //   {
// //     CutomerName: "Shoaib",
// //     User_ID: "Shoaib Raza",
// //     Feedback: "Bohot Acha Hai",
// //     Order_ID: "9035",
// //     Date: "25-11-24",
// //   },
// //   {
// //     CutomerName: "Attari Bilal",
// //     User_ID: "Bilal Raza",
// //     Feedback: "Bohot Acha Hai",
// //     Order_ID: "9095",
// //     Date: "26-11-24",
// //   },
// //   {
// //     CutomerName: "Rehman",
// //     User_ID: "Abdul Rehman",
// //     Feedback: "Bohot Acha Hai",
// //     Order_ID: "98035",
// //     Date: "28-11-24",
// //   },
// //   {
// //     CutomerName: "Faisal",
// //     User_ID: "Faisal Rajput",
// //     Feedback: "Bohot Acha Hai",
// //     Order_ID: "6837",
// //     Date: "21-11-24",
// //   },
// // ];

// // export default function Feedback() {
// //   return (
// //     <div className="min-h-screen mx-2 sm:mx-4 lg:mx-10 px-1">
// //       <div className="flex justify-between items-center my-4">
// //         <h1 className="font-bold text-lg sm:text-xl">Feedback</h1>
// //       </div>

// //       {/* Container for scrollable table with fixed height */}
// //       <div className="overflow-y-auto max-h-80"> {/* Adjust max-h as needed */}
// //         <Table className="min-w-full">
// //           <TableCaption>A list of your Feedback.</TableCaption>
// //           <TableHeader>
// //             <TableRow>
// //               <TableHead className="text-center">ID</TableHead>
// //               <TableHead className="text-center">Customer Name</TableHead>
// //               <TableHead className="text-center">User ID</TableHead>
// //               <TableHead className="text-center">Feedback</TableHead>
// //               <TableHead className="text-center">Order ID</TableHead>
// //               <TableHead className="text-center">Date</TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody>
// //             {feedbacks.map((feedback, index) => (
// //               <TableRow key={feedback.User_ID}>
// //                 <TableCell className="text-center">{index + 1}</TableCell>
// //                 <TableCell className="text-center">{feedback.CutomerName}</TableCell>
// //                 <TableCell className="text-center">{feedback.User_ID}</TableCell>
// //                 <TableCell className="font-medium">{feedback.Feedback}</TableCell>
// //                 <TableCell className="font-medium">{feedback.Order_ID}</TableCell>
// //                 <TableCell className="font-medium">{feedback.Date}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";

// export default function Feedback() {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
//   const [selectedFeedback, setSelectedFeedback] = useState(null);
//   const [filter, setFilter] = useState("");

//   // Fetch feedback data using server action
//   useEffect(() => {
//     const fetchFeedbacks = async () => {
//       const res = await fetch("/api/feedback");
//       const data = await res.json();
//       setFeedbacks(data.feedbacks);
//       setFilteredFeedbacks(data.feedbacks);
//     };
//     fetchFeedbacks();
//   }, []);

//   // Filter feedbacks based on input
//   const handleFilterChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     setFilter(value);
//     setFilteredFeedbacks(
//       feedbacks.filter(
//         (f) =>
//           f.userId?.firstName.toLowerCase().includes(value) ||
//           f.feedback.toLowerCase().includes(value)
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen mx-4 lg:mx-10 px-2">
//       <div className="flex justify-between items-center my-6">
//         <h1 className="font-bold text-2xl">Feedback</h1>
//         <Input
//           placeholder="Search feedbacks..."
//           value={filter}
//           onChange={handleFilterChange}
//           className="w-64"
//         />
//       </div>

//       <div className="overflow-x-auto">
//         <Table>
//           <TableCaption>All customer feedbacks</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead>ID</TableHead>
//               <TableHead>User Name</TableHead>
//               <TableHead>Feedback</TableHead>
//               <TableHead>Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredFeedbacks.map((feedback, index) => (
//               <TableRow key={feedback._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{feedback?.userId?.firstName}</TableCell>
//                 <TableCell>{feedback.feedback}</TableCell>
//                 <TableCell>
//                   <Sheet>
//                     <SheetTrigger
//                       onClick={() => setSelectedFeedback(feedback)}
//                       className="text-blue-500 hover:underline"
//                     >
//                       View Details
//                     </SheetTrigger>
//                     <SheetContent className='overflow-y-auto'>
//                       <h2 className="text-lg font-bold">Feedback Details</h2>
//                       <div className="mt-4 space-y-2">
//                         <p>
//                           <strong>User Name:</strong>{" "}
//                           {feedback?.userId?.firstName} {feedback?.userId?.lastName}
//                         </p>
//                         <p className="flex justify-between">
//                           <strong>User Email:</strong>
//                           {feedback?.userId?.email}
//                         </p>
//                         <p>
//                           <strong>Product:</strong> {" "}
//                           {feedback?.productId?.title || "No Product"}
//                         </p>
//                         <p>
//                           <strong>Category:</strong> {feedback?.productId?.category.title}
//                         </p>
//                         <img
//                           src={feedback?.productId?.imageUrl}
//                           alt={feedback?.productId?.title}
//                           className="w-full max-h-64 object-cover mt-4 rounded"
//                         />
//                         <p>
//                           <strong>Feedback:</strong> {feedback?.feedback}
//                         </p>
//                         <img src={feedback?.imageUrl} alt={feedback?.feedback}/>
//                         <img
//                           src={feedback?.product?.imageUrl}
//                           alt={feedback?.product?.title}
//                           className="w-full max-h-64 object-cover mt-4 rounded"
//                         />
//                       </div>
//                     </SheetContent>
//                   </Sheet>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }




"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { columns, Feedback } from "./columns"
import { DataTable } from "./datatable"

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([])
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([])

  // Fetch feedback data using server action
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await fetch("/api/feedback")
      const data = await res.json()
      setFeedbacks(data.feedbacks)
      setFilteredFeedbacks(data.feedbacks)
    }
    fetchFeedbacks()
  }, [])

  // Filter feedbacks based on name input
  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase()
    setFilteredFeedbacks(
      feedbacks.filter((f) =>
        f.userId.firstName.toLowerCase().includes(value)
      )
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center my-6">
        <h1 className="font-bold text-2xl">Feedback</h1>
        <Input
          placeholder="Search by name..."
          onChange={handleFilterChange}
          className="w-64"
        />
      </div>
      <DataTable columns={columns} data={filteredFeedbacks} />
    </div>
  )
}

