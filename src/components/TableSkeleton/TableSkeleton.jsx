// import React from 'react';
// import './TableSkeleton.css'; // Import the CSS file for styling

// const TableSkeleton = () => {
//   return (
//     <div className="table-skeleton">
//       <div className="table-header">
//         <div className="skeleton-item header-item"></div>
//         <div className="skeleton-item header-item"></div>
//         <div className="skeleton-item header-item"></div>
//         <div className="skeleton-item header-item"></div>
//       </div>
//       <div className="table-body">
//         {Array(5).fill(0).map((_, index) => (
//           <div key={index} className="table-row">
//             <div className="skeleton-item row-item"></div>
//             <div className="skeleton-item row-item"></div>
//             <div className="skeleton-item row-item"></div>
//             <div className="skeleton-item row-item"></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableSkeleton;



import React from 'react';

const TableSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Table Header Skeleton */}
      <div className="flex w-full bg-gray-100 py-3 px-4 border-b border-gray-300">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-6 bg-gray-300 rounded w-1/5 mx-2"></div>
        ))}
      </div>

      {/* Table Rows Skeleton */}
      {[...Array(8)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex w-full py-3 px-4 border-b border-gray-300"
        >
          {[...Array(5)].map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-6 bg-gray-200 rounded w-1/5 mx-2"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
