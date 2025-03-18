import Container from "../Components/Global/Container";
import Divider from "../Components/Global/Divider";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="font-extrabold text-primary-color text-lg lg:text-4xl">
            Build a Stunning Resume in Minutes!
          </h1>
          <h2 className="text-gray-800 font-semibold lg:max-w-2xl mx-auto lg:text-lg text-xs">
            AI-powered resume builder with customizable templates to make your
            job search easy and effective.
          </h2>
          <button className="bg-primary-color p-2 text-accent-color w-fit mx-auto rounded font-bold">
            Create Resume Now
          </button>
          <Divider className="w-12 h-1 bg-primary-color rounded-full mx-auto" />
          <video
            autoPlay
            loop
            className="lg:w-4xl w-full rounded mx-auto"
            src="https://videos.pexels.com/video-files/5971459/5971459-sd_960_506_25fps.mp4"
          ></video>
        </div>
      </Container>
    </>
  );
};

export default Home;
