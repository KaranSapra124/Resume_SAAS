import {
  AiOutlineFilePdf,
  AiOutlineRobot,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FiEdit, FiLayers, FiSearch } from "react-icons/fi";
import Container from "../Global/Container";
import { motion } from "framer-motion";
import Divider from "../Global/Divider";
const Features = () => {
  const features = [
    {
      title: "AI-Powered Resume Optimization",
      description:
        "Get AI-driven suggestions to improve your resume and increase job success rates.",
      icon: <AiOutlineRobot className="text-4xl text-primary" />,
    },
    {
      title: "Multiple Resume Templates",
      description:
        "Choose from a variety of professionally designed templates that fit any industry.",
      icon: <FiLayers className="text-4xl text-primary" />,
    },
    {
      title: "One-Click PDF Download",
      description:
        "Easily download your resume as a high-quality PDF with just a single click.",
      icon: <AiOutlineFilePdf className="text-4xl text-primary" />,
    },
    {
      title: "ATS-Friendly Resumes",
      description:
        "Our templates are optimized for Applicant Tracking Systems to increase your chances of getting hired.",
      icon: <AiOutlineCheckCircle className="text-4xl text-primary" />,
    },
    {
      title: "Drag & Drop Editing",
      description:
        "Customize your resume with a simple drag-and-drop interface—no coding required!",
      icon: <FiEdit className="text-4xl text-primary" />,
    },
    {
      title: "Job Matching (Coming Soon!)",
      description:
        "Get personalized job recommendations based on your resume content and skills.",
      icon: <FiSearch className="text-4xl text-primary" />,
    },
  ];

  return (
    <Container className="bg-accent-color">
      <motion.div className="flex flex-col lg:flex-row items-center gap-8 p-6">
        <motion.img
          src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?ga=GA1.1.898232110.1742558741&semt=ais_hybrid"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl lg:text-3xl font-bold text-primary-color">
            Unlock Your Dream Job with Resume Builder 🚀
          </h1>
          <p className="lg:text-sm text-base text-gray-700 my-2 font-semibold">
            Create stunning, ATS-friendly resumes in minutes with AI-powered
            assistance. Choose from multiple templates, get smart job
            recommendations, and apply with a single click!
          </p>

          <Divider className="my-2 h-1 rounded-full w-12 bg-primary-color " />

          <div className="grid grid-cols-2 gap-1">
            {features?.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="items-center shadow-sm p-2 rounded shadow-primary-color  justify-center flex flex-col gap-1"
                >
                  <div className="text-primary-color">{elem?.icon}</div>
                  <h2 className="text-primary-color text-sm font-semibold">
                    {elem?.title}
                  </h2>
                  <Divider className="h-0.5 w-12 mx-auto bg-primary-color rounded-full" />
                  <p className="text-center text-gray-800 font-light text-xs">
                    {elem?.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Features;
