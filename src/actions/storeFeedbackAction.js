export const addStoreFeedback = async (data) => {
    console.log("Payload being sent:", data);
    const response = await fetch('/api/storeFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to submit feedback');
    }
    return response.json();
};
