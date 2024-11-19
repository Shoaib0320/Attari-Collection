"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { uploadImage } from "@/actions/uploadImage";
import { addFeedback } from "@/actions/productsFeedbackAction";

export default function Feedback({ productId, userId }) {
  const [feedbackText, setFeedbackText] = useState("");
  const [file, setFile] = useState(null);
  const { toast } = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddFeedback = async () => {
    if (!feedbackText && !file) {
      toast({ title: "Please provide feedback text or upload a file." });
      return;
    }

    try {
      let uploadedImageUrl = null;

      if (file) {
        const formData = new FormData();
        formData.append("thumbnail", file);

        uploadedImageUrl = await uploadImage(formData);
        if (!uploadedImageUrl) throw new Error("Failed to upload image.");
      }

      const feedbackData = {
        userId,
        productId,
        feedback: feedbackText,
        imageUrl: uploadedImageUrl,
      };

      const res = await addFeedback(feedbackData);
      if (!res.success) throw new Error("Failed to save feedback.");

      toast({ title: "Feedback added successfully!" });
      setFeedbackText("");
      setFile(null);
    } catch (error) {
      toast({ title: error.message });
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-gray-700 hover:bg-gray-300 hover:text-black">
            Add Comment
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="p-5">
            <h2 className="text-lg font-bold mb-4">Add Feedback</h2>
            <textarea
              className="w-full border p-2 rounded mb-4"
              rows="4"
              placeholder="Write your feedback here..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="mb-4"
            />
            <Button
              onClick={handleAddFeedback}
              className="w-full bg-gray-700 hover:bg-gray-300 hover:text-black"
            >
              Add Feedback
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
