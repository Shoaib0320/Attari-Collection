'use client'

import { ReactNode, useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Feedback } from './columns'
import Image from 'next/image'

export function ViewDetailsSheet({ children, feedback }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Feedback Details</SheetTitle>
          <SheetDescription>
            Full details of the feedback
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold">User Information</h3>
            <p>Name: {feedback.userName}</p>
            <p>Email: {feedback.userEmail}</p>
          </div>
          <div>
            <h3 className="font-semibold">Product Information</h3>
            <p>Name: {feedback.productName}</p>
            <p>Category: {feedback.productCategory}</p>
            <div className="mt-2">
              <Image src={feedback.productImage} alt={feedback.productName} width={100} height={100} className="rounded-md" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Feedback</h3>
            <p>{feedback.feedback}</p>
            {feedback.feedbackImage && (
              <div className="mt-2">
                <img src={feedback.feedbackImage} alt="Feedback Image" width={200} height={200} className="rounded-md" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold">Date</h3>
            <p>{new Date(feedback.createdAt).toLocaleString()}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}