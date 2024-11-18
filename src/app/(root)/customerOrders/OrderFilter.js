'use client'  // This marks this component as a Client Component

import { useState } from 'react';

export default function StatusFilter({ setStatusFilter }) {
  const [localStatus, setLocalStatus] = useState('all'); // Local state for managing status

  const handleStatusChange = (newStatus) => {
    setLocalStatus(newStatus); // Update local state
    setStatusFilter(newStatus); // Call the passed function to update the global state
  };

  return (
    <div className="flex gap-4 justify-center mb-6">
      <button onClick={() => handleStatusChange('pending')} className="btn-filter">Pending</button>
      <button onClick={() => handleStatusChange('delivered')} className="btn-filter">Delivered</button>
      <button onClick={() => handleStatusChange('cancelled')} className="btn-filter">Cancelled</button>
      <button onClick={() => handleStatusChange('all')} className="btn-filter">All</button>
    </div>
  );
}
