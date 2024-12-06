import React, { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import Image from "next/image";

const FeedbackSlider = ({ productFeedbacks }) => {
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const handleNextFeedback = () => {
        setCurrentFeedbackIndex((prevIndex) =>
            prevIndex === productFeedbacks.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousFeedback = () => {
        setCurrentFeedbackIndex((prevIndex) =>
            prevIndex === 0 ? productFeedbacks.length - 1 : prevIndex - 1
        );
    };

    // Check if feedback exists
    if (!productFeedbacks || productFeedbacks.length === 0) {
        return '';
    }

    return (
        <div className="relative flex flex-col items-center w-full my-10">
            {/* Feedback Display */}
            <div
                className="relative overflow-hidden w-full max-w-4xl"
                style={{ height: "400px" }}
            >
                {productFeedbacks.map((feedback, index) => (
                    <div
                        key={feedback._id}
                        className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                            index === currentFeedbackIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="flex flex-col items-center gap-8 py-10 bg-gray-200 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 p-8">
                            <Image
                                src={feedback.imageUrl || "/placeholder-avatar.png"}
                                alt={feedback.userId.firstName}
                                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                                width={80}
                                height={80}
                            />
                            <div className="text-center">
                                <p className="text-2xl font-bold">
                                    {feedback.userId.firstName}{" "}
                                    {feedback.userId.lastName || ""}
                                </p>
                                <p className="text-md font-medium text-gray-500">
                                    {feedback.userId.email}
                                </p>
                                <p className="mt-4 text-lg font-light italic">
                                    {feedback.feedback}
                                </p>
                                <p className="text-gray-400 text-sm mt-3">
                                    Added on:{" "}
                                    <span className="font-medium">
                                        {new Date(feedback.createdAt).toLocaleString()}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={handlePreviousFeedback}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:text-gray-700 hover:bg-gray-300 p-3 rounded-full focus:outline-none shadow-lg hover:shadow-2xl transition-all md:text-2xl md:p-2"
                    style={{ marginLeft: "10px" }}
                >
                    <FaLessThan />
                </button>
                <button
                    onClick={handleNextFeedback}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:text-gray-700 hover:bg-gray-300 p-3 rounded-full focus:outline-none shadow-lg hover:shadow-2xl transition-all md:text-2xl md:p-2"
                    style={{ marginRight: "10px" }}
                >
                    <FaGreaterThan />
                </button>
            </div>
        </div>
    );
};

export default FeedbackSlider;

