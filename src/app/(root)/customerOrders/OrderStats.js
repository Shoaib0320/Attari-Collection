"use client"; // This makes the component a Client Component

// components/OrderStats.js
export default function OrderStats({ stats }) {
    return (
      <div className="flex gap-4">
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">
            Pending: {stats.pending}
          </h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">
            Delivered: {stats.delivered}
          </h1>
        </div>
        <div className="shadow flex-grow p-3 rounded border">
          <h1 className="font font-bold text-2xl">
            Cancelled: {stats.cancelled}
          </h1>
        </div>
      </div>
    );
  }
  
  