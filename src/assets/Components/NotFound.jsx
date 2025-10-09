import React from 'react';

const NotFound = () => {
  return (
     <div className="flex flex-col items-center justify-center py-20">
    <h1 className="text-4xl font-bold text-red-600 mb-4">App Not Found</h1>
    <p className="text-gray-500">The app you’re looking for doesn’t exist or was removed.</p>
  </div>
  );
};

export default NotFound;