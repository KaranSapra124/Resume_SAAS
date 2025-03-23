import Container from "../Global/Container";
import { motion } from "framer-motion";
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
    <Container className="bg-primary-color">
      <motion.div>
        <h1>What Our Clients Say ?</h1>
        <div>
          {testimonials?.map((testimonial, index) => {
            return (
              <motion.div>
                <div>
                  <img src={testimonial?.image} alt="" />
                  <div>
                    <h2>{testimonial?.name}</h2>
                    <p>{testimonial?.designation}</p>
                  </div>
                </div>
                <p>{testimonial?.feedback}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};

export default Testimonials;
