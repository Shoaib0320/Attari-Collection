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
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddFeedback = async () => {
    if (!feedbackText && !file) {
      toast({ title: "Please provide feedback text or upload a file." });
      return;
    }

    setLoading(true);

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
    } finally {
      setLoading(false);
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

            <div>
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-32 px-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-sm text-gray-600">
                  {file
                    ? `Selected file: ${file.name}`
                    : "Click to select an image"}
                </span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
              </label>
            </div>

            <Button
              onClick={handleAddFeedback}
              className="w-full bg-gray-700 hover:bg-gray-300 hover:text-black mt-3"
            >
              {loading ? "Submitting..." : "Add Feedback"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}








