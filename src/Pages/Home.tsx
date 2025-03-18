import Container from "../Components/Global/Container";

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
          <video
            autoPlay
            loop className="lg:w-4xl w-full rounded mx-auto"
            src="https://videocdn.cdnpk.net/videos/b0969803-680e-5ec0-934a-608eac10c3fc/horizontal/previews/clear/small.mp4?token=exp=1742322441~hmac=c88ba33b4cb014ef7bace1d93d1a50012f84a3e27e7fc080bccdde7d7d4ee6de"
          ></video>
        </div>
      </Container>
    </>
  );
};

export default Home;
