import React from "react";
import artCourse from "../assets/images/art.jfif";
import javaCourse from "../assets/images/java.jfif";
import reactCourse from "../assets/images/react.png";

const Home = () => {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto py-12">
        {/* Banner Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Learning that gets you</h1>
          <p className="text-center text-gray-700 mb-6">
            Skills for your present (and your future). Get started with us today.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-orange-600 mx-2">
              Explore Courses
            </button>
            <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-orange-600 mx-2">
              Become an Instructor
            </button>
          </div>
        </div>

        {/* Example Courses Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src={javaCourse} alt="Course 1" className="rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">Course 1</h3>
              <p className="text-gray-700">Description for course 1</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src={artCourse} alt="Course 2" className="rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">Course 2</h3>
              <p className="text-gray-700">Description for course 2</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src={reactCourse} alt="Course 3" className="rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">Course 3</h3>
              <p className="text-gray-700">Description for course 3</p>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">Join Us</h2>
          <p className="text-center text-gray-700 mb-6">
            Whether you want to learn or to share what you know, you've come to the right place.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-orange-600 mx-2">
              Register as a Student
            </button>
            <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-orange-600 mx-2">
              Register as an Instructor
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
