// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCaption,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";

// // // const feedbacks = [
// // //   {
// // //     CutomerName: "Shoaib",
// // //     User_ID: "Shoaib Raza",
// // //     Feedback: "Bohot Acha Hai",
// // //     Order_ID: "9035",
// // //     Date: "25-11-24",
// // //   },
// // //   {
// // //     CutomerName: "Attari Bilal",
// // //     User_ID: "Bilal Raza",
// // //     Feedback: "Bohot Acha Hai",
// // //     Order_ID: "9095",
// // //     Date: "26-11-24",
// // //   },
// // //   {
// // //     CutomerName: "Rehman",
// // //     User_ID: "Abdul Rehman",
// // //     Feedback: "Bohot Acha Hai",
// // //     Order_ID: "98035",
// // //     Date: "28-11-24",
// // //   },
// // //   {
// // //     CutomerName: "Faisal",
// // //     User_ID: "Faisal Rajput",
// // //     Feedback: "Bohot Acha Hai",
// // //     Order_ID: "6837",
// // //     Date: "21-11-24",
// // //   },
// // // ];

// // // export default function Feedback() {
// // //   return (
// // //     <div className="min-h-screen mx-2 sm:mx-4 lg:mx-10 px-1">
// // //       <div className="flex justify-between items-center my-4">
// // //         <h1 className="font-bold text-lg sm:text-xl">Feedback</h1>
// // //       </div>

// // //       {/* Container for scrollable table with fixed height */}
// // //       <div className="overflow-y-auto max-h-80"> {/* Adjust max-h as needed */}
// // //         <Table className="min-w-full">
// // //           <TableCaption>A list of your Feedback.</TableCaption>
// // //           <TableHeader>
// // //             <TableRow>
// // //               <TableHead className="text-center">ID</TableHead>
// // //               <TableHead className="text-center">Customer Name</TableHead>
// // //               <TableHead className="text-center">User ID</TableHead>
// // //               <TableHead className="text-center">Feedback</TableHead>
// // //               <TableHead className="text-center">Order ID</TableHead>
// // //               <TableHead className="text-center">Date</TableHead>
// // //             </TableRow>
// // //           </TableHeader>
// // //           <TableBody>
// // //             {feedbacks.map((feedback, index) => (
// // //               <TableRow key={feedback.User_ID}>
// // //                 <TableCell className="text-center">{index + 1}</TableCell>
// // //                 <TableCell className="text-center">{feedback.CutomerName}</TableCell>
// // //                 <TableCell className="text-center">{feedback.User_ID}</TableCell>
// // //                 <TableCell className="font-medium">{feedback.Feedback}</TableCell>
// // //                 <TableCell className="font-medium">{feedback.Order_ID}</TableCell>
// // //                 <TableCell className="font-medium">{feedback.Date}</TableCell>
// // //               </TableRow>
// // //             ))}
// // //           </TableBody>
// // //         </Table>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // // 'use client'

// // // import { useState } from 'react'
// // // import { useQuery } from '@tanstack/react-query'
// // // import { getFeedbacks } from '@/actions/productsFeedbackAction'
// // // import { DataTable } from './data-table'
// // // import { columns } from './columns'

// // // export default function FeedbackPage() {
// // //   const { data: feedbacks, isLoading, error } = useQuery({
// // //     queryKey: ['feedbacks'],
// // //     queryFn: getFeedbacks,
// // //   })

// // //   if (isLoading) return <div>Loading...</div>
// // //   if (error) return <div>Error: {error.message}</div>

// // //   return (
// // //     <div className="container mx-auto py-10">
// // //       <h1 className="text-2xl font-bold mb-5">Feedbacks</h1>
// // //       <DataTable columns={columns} data={feedbacks || []} />
// // //     </div>
// // //   )
// // // }





// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { DataTable } from './data-table'
// // import { columns } from './columns'
// // import { getFeedbacks } from '@/actions/productsFeedbackAction'

// // function useFetchData(queryFn) {
// //   const [data, setData] = useState(null)
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         setLoading(true)
// //         const result = await queryFn()
// //         setData(result)
// //       } catch (err) {
// //         setError(err)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchData()
// //   }, [queryFn])

// //   return { data, loading, error }
// // }

// // export default function FeedbackPage() {
// //   const { data: feedbacks, loading, error } = useFetchData(getFeedbacks)

// //   if (loading) return <div>Loading...</div>
// //   if (error) return <div>Error: {error.message}</div>

// //   return (
// //     <div className="container mx-auto py-10">
// //       <h1 className="text-2xl font-bold mb-5">Feedbacks</h1>
// //       <DataTable columns={columns} data={feedbacks || []} />
// //     </div>
// //   )
// // }






import { Suspense } from 'react';
import FeedbackTable from './data-table';

export default function FeedbackPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Feedback</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <FeedbackTable />
      </Suspense>
    </div>
  );
}






