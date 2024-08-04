import React from "react";
import whiteLogo from "../assets/images/logo_white.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-24">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={whiteLogo} alt="Learning Platform Logo" className="h-16" />
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Careers
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
