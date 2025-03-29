import Container from "../Global/Container";
import { FaUserEdit, FaFileAlt, FaDownload, FaArrowDown } from "react-icons/fa";
import Divider from "../Global/Divider";
import { motion } from "framer-motion";

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
        <h1 className="text-center font-extrabold lg:text-3xl text-primary-color text-xl">
          How It Works?
        </h1>
        <Divider className="h-1 w-12 bg-primary-color rounded-full mx-auto my-2" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          //   animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: 0 }}
          className=" flex flex-col justify-center  items-center "
        >
          {howItWorks?.map((elem, index) => {
            return (
              <>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className={`flex max-w-screen-2xl cursor-pointer my-4 justify-evenly w-full ${
                    index % 2 === 0 ? "flex-row " : "flex-row-reverse "
                  }`}
                >
                  <div className="mx-4 shadow-md shadow-primary-color my-auto bg-gray-200/80 p-4 rounded-full">
                    {elem?.icon}
                  </div>
                  <div className="max-w-96 rounded bg-primary-color p-2">
                    <h2 className="lg:text-md md:text-xl text-sm font-semibold  text-accent-color ">
                      {elem?.title}
                    </h2>
                    <Divider className="h-1 w-12 bg-white rounded-full  my-2" />
                    <p className="text-gray-100">{elem?.description}</p>
                  </div>
                </motion.div>
                {index !== howItWorks?.length - 1 && (
                  <FaArrowDown className="text-primary-color my-2 bg-gray-200/30 p-1 text-2xl shadow shadow-black rounded-full" />
                )}{" "}
              </>
            );
          })}
        </motion.div>
      </Container>
    </>
  );
};

export default HowItWorks;
