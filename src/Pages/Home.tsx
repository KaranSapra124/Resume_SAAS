import ApplyForDesiredJobs from "../Components/Home/ApplyForDesiredJobs";
import Features from "../Components/Home/Features";
import Hero from "../Components/Home/Hero";
import HowItWorks from "../Components/Home/HowItWorks";
import PricingSection from "../Components/Home/PricingSection";
import ResumeTemplates from "../Components/Home/ResumeTemplates";
import Testimonials from "../Components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ApplyForDesiredJobs />
      <Features />
      <ResumeTemplates />
      <PricingSection />
      <Testimonials />
    </>
  );
};

export default Home;
