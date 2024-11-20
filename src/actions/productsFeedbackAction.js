// export async function addFeedback(feedbackData) {
//   const response = await fetch("/api/feedback", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(feedbackData),
//   });
//   return await response.json();
// }


export async function addFeedback(feedbackData) {
  console.log("Payload being sent:", feedbackData); // Add this line to debug

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(feedbackData),
    });

    const data = await response.json();

    return data;
    
  } catch (error) {
    console.error("Error adding feedback:", error);
    throw error;
  }
}
