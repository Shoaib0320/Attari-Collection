export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white flex flex-col">
      <div className="p-6">
        <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto"></div>
        <p className="mt-4 text-center font-semibold">User Name</p>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          <li className="hover:bg-blue-600 p-2 rounded">
            <a href="#">My Cloud</a>
          </li>
          <li className="hover:bg-blue-600 p-2 rounded">
            <a href="#">Shared Files</a>
          </li>
          <li className="hover:bg-blue-600 p-2 rounded">
            <a href="#">Favorites</a>
          </li>
          <li className="hover:bg-blue-600 p-2 rounded">
            <a href="#">Upload Files</a>
          </li>
        </ul>
      </nav>
      <div className="p-6">
        <button className="w-full py-2 bg-red-600 rounded">Log Out</button>
      </div>
    </div>
  );
}
