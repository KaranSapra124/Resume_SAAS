import React from "react";

const templates = [
  {
    id: 1,
    name: "Modern",
    image: "https://via.placeholder.com/200", // Replace with actual template image
  },
  {
    id: 2,
    name: "Classic",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Creative",
    image: "https://via.placeholder.com/200",
  },
];

const ResumeTemplates = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#2563eb] mb-6">
        Choose Your Resume Template
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {template.name}
            </h2>
            <button className="mt-4 w-full bg-[#2563eb] text-white py-2 rounded-md hover:bg-[#1d4ed8]">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
