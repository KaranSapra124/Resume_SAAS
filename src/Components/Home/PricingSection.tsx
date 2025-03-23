import { FaFire } from "react-icons/fa6";
import Container from "../Global/Container";
import { motion } from "framer-motion";
import Divider from "../Global/Divider";
const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: 0,
      features: ["Basic Templates", "PDF Download", "Limited Customization"],
      highlight: false, // Special highlighting for Pro Plan
    },
    {
      name: "Pro",
      price: 199,
      features: [
        "Advanced Templates",
        "PDF & Word Download",
        "Full Customization",
        "AI Content Suggestions",
      ],
      highlight: true, // Highlight this plan as "Most Popular"
    },
    {
      name: "Ultimate",
      price: 499,
      features: [
        "All Templates + Custom",
        "PDF, Word & Google Docs",
        "Full Customization + AI Auto-Design",
        "Resume Analytics (Views, ATS Score)",
        "Priority Support",
      ],
      highlight: false,
    },
  ];
  return (
    <Container className="bg-accent-color">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="lg:text-3xl text-xl text-center text-primary-color font-extrabold">
          Choose That Suites Your 💵
        </h1>
        <p className="text-center text-xs text-gray-800 max-w-xl mx-auto my-1 ">
          Choose a plan that fits your needs! Whether you're a student, a
          professional, or a business, our pricing is designed to offer maximum
          value with flexible features. Get started for free and upgrade
          anytime! 💼✨
        </p>
        <Divider className="h-1 w-12 mx-auto bg-primary-color rounded-full my-2" />
        <motion.div className="flex justify-evenly">
          {pricingPlans?.map((plan, index) => {
            return (
              <div
                key={index}
                className={`p-4 w-64 shadow bg-gray-200 shadow-black border rounded ${
                  plan.highlight ? "border-gray-200" : "border-gray-300 "
                } `}
              >
                <h2
                  className={`${
                    plan.name === "Free"
                      ? "text-primary-color"
                      : plan.name === "Ultimate"
                      ? "text-green-500"
                      : "text-gray-800"
                  } text-xl font-bold`}
                >
                  {plan.name}
                </h2>
                <p className="text-2xl font-semibold ">
                  ₹{plan.price}
                  <span className="text-xs text-black font-semibold">/month</span>
                </p>
                <ul className="flex flex-col gap-2 my-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <FaFire className="text-orange-700" />
                      <span className="text-xs"> {feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 bg-primary text-white px-4 py-2 rounded">
                  {plan.price === 0 ? "Get Started" : "Upgrade Now"}
                </button>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default PricingSection;
