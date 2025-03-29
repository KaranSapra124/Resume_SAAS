import Container from "../Global/Container";
import { motion } from "framer-motion";
import Divider from "../Global/Divider";

const ApplyForDesiredJobs = () => {
  return (
    <Container className="bg-primary-color py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center text-white"
      >
        <h1 className="text-accent-color lg:text-4xl font-bold ">
          Job Exploration - Coming Soon! 🚀
        </h1>
        <Divider className="my-1.5 h-1 rounded-full w-12 bg-accent-color mx-auto" />

        <p className="text-lg max-w-2xl mx-auto mb-6">
          We are working on an exciting new feature that will allow you to **discover & apply** 
          for jobs directly from our platform. Stay tuned for updates! 🔥
        </p>
        <button 
          disabled 
          className="border bg-white/20 text-white px-6 py-3 font-semibold rounded-md cursor-not-allowed"
        >
          Coming Soon ⏳
        </button>
      </motion.div>
    </Container>
  );
};

export default ApplyForDesiredJobs;
