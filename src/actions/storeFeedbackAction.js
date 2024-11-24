"use server"

import { connectDB } from "@/lib/db/connectDB"
import { StoreFeedbackModal } from "@/lib/models/StoreFeedback"


export async function getStoreFeedbacks() {
  try {
    await connectDB()
    const feedbacks = await StoreFeedbackModal.find().populate("userId", "firstName email").lean()
    return JSON.parse(JSON.stringify(feedbacks))
  } catch (error) {
    console.error("Error fetching feedbacks:", error)
    throw new Error("Failed to fetch feedbacks")
  }
}

export const addStoreFeedback = async (data) => {
    console.log("Payload being sent:", data);
    const response = await fetch(`${process.env.BASE_URL}api/storeFeedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });    
    if (!response.ok) {
        throw new Error('Failed to submit feedback');
    }    
    return response.json();
};    

