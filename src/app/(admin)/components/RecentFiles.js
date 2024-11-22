export default function Files() {
  const recentFiles = [
    { name: "IMG_100000", type: "PNG", size: "5 MB" },
    { name: "Startup pitch", type: "AVI", size: "105 MB" },
    { name: "Freestyle beat", type: "MP3", size: "20 MB" },
    { name: "Work proposal", type: "DOCX", size: "500 KB" },
  ];

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Recent Files</h2>
      <div className="space-y-4">
        {recentFiles.map((file, index) => (
          <div
            key={index}
            className="p-4 flex justify-between items-center bg-white shadow rounded"
          >
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">
                {file.type} file • {file.size}
              </p>
            </div>
            <button className="text-blue-500">Share</button>
          </div>
        ))}
      </div>
    </div>
  );
}
