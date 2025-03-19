import Container from "../Components/Global/Container";
import Divider from "../Components/Global/Divider";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex  items-center  lg:flex-row flex-col gap-4 lg:gap-10">
          <div className="lg:w-1/2 w-full flex flex-col   gap-2">
          <div className="bg-primary-color w-fit rounded-full px-2 text-white font-semibold my-2">#HireMeNow</div>
            <h1 className="font-extrabold text-primary-color text-lg text-left leading-14  lg:text-5xl">
              Build a Stunning Resume in Minutes At Your Fingerprints!
            </h1>
            <Divider className="w-12  h-1 bg-primary-color rounded-full lg:mx-0 mx-auto" />

            <h2 className="text-gray-800 text-left font-semibold  mx-auto lg:text-lg text-xs">
              AI-powered resume builder with customizable templates to make your
              job search easy and effective.
            </h2>
            <button className="bg-primary-color p-2 text-accent-color w-fit lg:mx-0 mx-auto rounded font-bold">
              Create Resume Now
            </button>
            <Divider className="w-12 lg:hidden h-1 bg-primary-color rounded-full mx-auto" />
          </div>
          <video
            autoPlay
            loop
            className="lg:w-1/2 w-full rounded mx-auto"
            src="https://videos.pexels.com/video-files/5971459/5971459-sd_960_506_25fps.mp4"
          ></video>
        </div>
      </Container>
    </>
  );
};

export default Home;
