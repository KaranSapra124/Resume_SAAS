import Container from "../Global/Container";
import { motion } from "framer-motion";
import Divider from "../Global/Divider";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      designation: "Software Engineer at Google",
      feedback:
        "This resume builder helped me create a professional resume in minutes! The templates are sleek, and the customization options are fantastic.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Mehta",
      designation: "Marketing Manager at Zomato",
      feedback:
        "Absolutely loved the ease of use! The resume looked amazing, and I got interview calls within days. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Verma",
      designation: "Data Scientist at Microsoft",
      feedback:
        "A game-changer for job seekers! The ATS-friendly templates helped me stand out from the crowd.",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Sneha Kapoor",
      designation: "HR Manager at Infosys",
      feedback:
        "The best resume builder I've used so far. Clean design, intuitive UI, and effective templates!",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
  ];

  return (
    <Container className="bg-accent-color">
      <motion.div>
        <h1 className="lg:text-3xl text-xl text-primary-color font-bold text-center ">
          What Our Clients Say ? 📢
        </h1>
        <p className="text-xs text-gray-800 text-center my-1">
          Our users love how easy and professional our resume builder is! With
          ATS-friendly templates, it helps them stand out and land their dream
          jobs. 🚀
        </p>
        <Divider className="h-1 w-12 rounded-full bg-primary-color mx-auto my-2" />
        <div className="flex justify-between">
          {testimonials?.map((testimonial, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: index + 0.5,
                  delay: index + 1,
                }}
                // key={index}
                className="bg-accent-color  shadow-md shadow-black max-w-64 p-2 rounded flex flex-col "
              >
                <div className="flex items-center justify-between">
                  <img
                    className="w-16 shadow shadow-black  rounded-full"
                    src={testimonial?.image}
                    alt=""
                  />
                  <div>
                    <h2 className="text-sm font-semibold">
                      {testimonial?.name}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {testimonial?.designation}
                    </p>
                  </div>
                </div>
                <Divider className="w-12 my-2 h-0.5 bg-primary-color " />
                <p className="text-xs text-gray-600">
                  <span className="text-lg text-primary-color font-extrabold">
                    "
                  </span>
                  {testimonial?.feedback}
                  <span className="text-lg text-primary-color font-extrabold">
                    "
                  </span>
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};

export default Testimonials;
