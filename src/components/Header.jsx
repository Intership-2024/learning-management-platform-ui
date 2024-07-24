import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://th.bing.com/th/id/R.6b9bf29f1bfc93dd57175f6620860ec8?rik=EoBoWaMc6gHUPw&riu=http%3a%2f%2fwww.ballinamorecs.ie%2fwp-content%2fuploads%2f2014%2f07%2felearning-logo.png&ehk=kri2mThAde3az6tiZ%2bonYJ9cTBKxZg3sByHVvjgm%2bYk%3d&risl=&pid=ImgRaw&r=0"
            alt="Learning Platform Logo"
            className="h-16 pr-8"
          />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Deals for Businesses
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Teach on Learning Platform
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">Log in</button>
          <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-orange-600">
            Sign up
          </button>
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Deals for Businesses
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Teach on E-Learning
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
