function Loader() {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="animate-pulse flex space-x-4 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg"
          >
            <div className="h-6 w-32 bg-gray-600 rounded"></div>
            <div className="h-6 w-32 bg-gray-600 rounded"></div>
            <div className="h-6 w-32 bg-gray-600 rounded"></div>
            <div className="h-6 w-32 bg-gray-600 rounded"></div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Loader;
  