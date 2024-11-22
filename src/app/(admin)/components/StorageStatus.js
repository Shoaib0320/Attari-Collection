export default function StorageInfo() {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="font-semibold text-xl mb-4">Storage Info</h2>
      <p className="text-gray-500 mb-2">Your storage</p>
      <div className="bg-gray-200 w-full h-4 rounded-lg overflow-hidden">
        <div className="bg-blue-500 h-full" style={{ width: "75%" }}></div>
      </div>
      <p className="mt-2 text-gray-500">75 GB of 100 GB used</p>

      <h3 className="font-semibold text-lg mt-6">Your shared folders</h3>
      <ul className="mt-4 space-y-2">
        <li className="p-2 bg-blue-50 rounded">Keynote Files</li>
        <li className="p-2 bg-blue-50 rounded">Vacation Photos</li>
        <li className="p-2 bg-blue-50 rounded">Project Report</li>
      </ul>
    </div>
  );
}
