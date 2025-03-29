const templates = [
    {
      id: 1,
      name: "Modern",
      image:
        "https://marketplace.canva.com/EAFszEvkM50/2/0/1131w/canva-simple-professional-cv-resume-36p5VOFVDxY.jpg",
    },
    {
      id: 2,
      name: "Classic",
      image:
        "https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg",
    },
    {
      id: 3,
      name: "Creative",
      image:
        "https://d.novoresume.com/images/doc/skill-based-resume-template.png",
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
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-96 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {template.name}
                </h2>
                <button className="bg-[#2563eb] cursor-pointer text-white py-2 px-4 rounded-md hover:bg-[#1d4ed8]">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ResumeTemplates;