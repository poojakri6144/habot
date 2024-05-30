import React from "react";
import backgroundImg from "../images/background.png"; // Path to your background image
import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Adjusted the overlay color to match your design */}
      <div className="flex flex-col justify-center items-center h-full text-center text-white p-4">
        <h1 className="text-5xl font-bold mb-2">Are You a Supplier?</h1>
        <p className=" text-5xl font-normal mb-8">
          Explore Matching Opportunities.
        </p>
        <div className="flex gap-4 mb-4 w-3/5">
          <div className="bg-white flex items-center rounded p-2 w-full">
            <BsBriefcaseFill
              color="#E7760D"
              className="text-gray-400 text-sm mr-3"
            />{" "}
            {/* React Icon for search */}
            <input
              type="text"
              placeholder="Search your required service here"
              className="flex-grow focus:outline-none text-sm font-medium text-gray-800"
            />
          </div>
          <div className="bg-white flex items-center rounded p-2 w-full">
            <FaLocationDot
              color="#E7760D"
              className="text-gray-400 text-lg mr-2"
            />{" "}
            {/* React Icon for user */}
            <input
              type="text"
              placeholder="Search your desired location here"
              className="flex-grow focus:outline-none text-sm font-medium text-gray-800"
            />
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm">
            Search
          </button>
        </div>
        <p className=" font-extrabold text-base">
          Are you a buyer?
          <a href="#" className="text-white underline font-medium ml-2 text-sm">
            Click here if you are looking to post a requirements
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
