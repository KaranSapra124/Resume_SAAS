import React from "react";
import Container from "./Container";
// import Divider from "./Divider";

const Footer: React.FC = () => {
  return (
    <>
      <Container className="bg-primary-color">
        <footer className="  text-white ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Section */}
            <div>
              <h2 className="text-2xl font-bold">HireMeNow</h2>
              <p className="mt-2 text-gray-300">
                HireMeNow is designed to simplify your job search with
                professional resume templates and seamless customization. Build
                your perfect resume in minutes and land your dream job
                effortlessly!
              </p>
            </div>

            {/* Product Section */}
            <div>
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">Overview</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">
                  Customer stories
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">
                  Guides & tutorials
                </li>
                <li className="hover:text-white cursor-pointer">Help center</li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">About us</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Media kit</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6">
            {/* Left */}
            <div className="text-gray-300 text-sm flex items-center space-x-6">
              <span className="cursor-pointer">🌍 English</span>
              <span className="cursor-pointer">Terms & privacy</span>
              <span className="cursor-pointer">Security</span>
              <span className="cursor-pointer">Status</span>
            </div>

            {/* Middle */}
            <div className="text-gray-300 text-sm mt-4 md:mt-0">
              &copy; 2021 Whitespace LLC.
            </div>

            {/* Right - Social Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-gray-300">
                🌐
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                🐦
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                🔗
              </a>
            </div>
          </div>

          {/* Call to Action Section
      <div className="mt-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Try It Today</h3>
          <p className="text-gray-300 mt-2">Get started for free. Add your whole team as your needs grow.</p>
        </div>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 md:mt-0 hover:bg-blue-600 transition">
          Start today →
        </button>
      </div> */}
        </footer>
      </Container>
    </>
  );
};

export default Footer;
