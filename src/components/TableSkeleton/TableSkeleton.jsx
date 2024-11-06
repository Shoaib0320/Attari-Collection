import React from 'react';
import './TableSkeleton.css'; // Import the CSS file for styling

const TableSkeleton = () => {
  return (
    <div className="table-skeleton">
      <div className="table-header">
        <div className="skeleton-item header-item"></div>
        <div className="skeleton-item header-item"></div>
        <div className="skeleton-item header-item"></div>
        <div className="skeleton-item header-item"></div>
      </div>
      <div className="table-body">
        {Array(5).fill(0).map((_, index) => (
          <div key={index} className="table-row">
            <div className="skeleton-item row-item"></div>
            <div className="skeleton-item row-item"></div>
            <div className="skeleton-item row-item"></div>
            <div className="skeleton-item row-item"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
