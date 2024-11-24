

import { getStoreFeedbacks } from "@/actions/storeFeedbackAction"
import { StoreFeedbackTable } from "./components/feedback-Table"

export default async function StoreFeedbacks() {
  const feedbacks = await getStoreFeedbacks()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-serif text-gray-800 mb-6">Store Feedbacks</h1>
      <StoreFeedbackTable data={feedbacks} />
    </div>
  )
}

