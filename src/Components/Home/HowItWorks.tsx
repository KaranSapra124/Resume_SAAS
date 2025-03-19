import Container from "../Global/Container";
import { FaUserEdit, FaFileAlt, FaDownload } from "react-icons/fa";
import Divider from "../Global/Divider";

const HowItWorks = () => {
  const howItWorks = [
    {
      step: "Step 1",
      title: "Enter Your Details",
      description:
        "Fill in your personal information, work experience, education, and skills. Our intuitive input fields make it easy!",
      icon: <FaUserEdit className="text-5xl text-blue-600 mx-auto" />,
    },
    {
      step: "Step 2",
      title: "Choose a Template",
      description:
        "Select from a variety of sleek, ATS-friendly resume templates that match your style and industry.",
      icon: <FaFileAlt className="text-5xl text-green-600 mx-auto" />,
    },
    {
      step: "Step 3",
      title: "Download & Apply",
      description:
        "Preview your resume in real time, make final tweaks, and download it as a PDF—ready to impress recruiters!",
      icon: <FaDownload className="text-5xl text-red-600 mx-auto" />,
    },
  ];
  return (
    <>
      <Container className="bg-gray-200/30">
        <h1 className="text-center lg:text-3xl text-primary-color text-xl">
          How It Works?
        </h1>
        <Divider className="h-1 w-12 bg-primary-color rounded-full mx-auto my-2"/>
        <div className=" flex flex-col justify-center  items-center ">
          {howItWorks?.map((elem, index) => {
            return (
              <div
                key={index}
                className={`flex my-4 justify-evenly w-full ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="mx-4 shadow shadow-black my-auto bg-gray-200/80 p-4 rounded-full">
                  {elem?.icon}
                </div>
                <div className="max-w-96 rounded bg-primary-color p-2">
                  <h2 className="lg:text-md md:text-xl text-sm text-accent-color ">
                    {elem?.title}
                  </h2>
                  <Divider className="h-1 w-12 bg-white rounded-full  my-2"/>
                  <p className="text-gray-100">{elem?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default HowItWorks;
