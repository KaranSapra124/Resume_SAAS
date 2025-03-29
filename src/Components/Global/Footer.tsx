import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <>
      <Container className="bg-primary-color">
        <footer className="text-white">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Home Section */}
            <div>
              <h2 className="text-2xl font-bold">Home</h2>
              <p className="mt-2 text-gray-300">
                HireMeNow is designed to simplify your job search with
                professional resume templates and seamless customization. Build
                your perfect resume in minutes and land your dream job
                effortlessly!
              </p>
            </div>

            {/* Features Section */}
            <div>
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                  <Link to="/">Overview</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link to="/features">Features</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>

            {/* Pricing Section */}
            <div>
              <h3 className="text-lg font-semibold">Pricing</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                  <Link to="/pricing">Pricing Plans</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link to="/contact">Contact Sales</Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                  <Link to="/contact">Get in Touch</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                  <Link to="/contact">Support</Link>
                </li>
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
              &copy; 2025 HireMeNow.
            </div>

            {/* Right - Social Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-gray-300">🌐</a>
              <a href="#" className="text-white hover:text-gray-300">🐦</a>
              <a href="#" className="text-white hover:text-gray-300">🔗</a>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
