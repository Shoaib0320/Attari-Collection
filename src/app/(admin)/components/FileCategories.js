export default function Categories() {
  const categories = [
    { name: "Pictures", color: "bg-purple-500", files: "480 files" },
    { name: "Documents", color: "bg-blue-500", files: "190 files" },
    { name: "Videos", color: "bg-pink-500", files: "30 files" },
    { name: "Audio", color: "bg-green-500", files: "8 files" },
  ];

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`p-4 rounded-lg shadow ${cat.color} text-white`}
          >
            <p className="font-semibold">{cat.name}</p>
            <p className="text-sm">{cat.files}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
