import React, { useState } from "react";
import { FaCheck } from "react-icons/fa"; // Importing check icon from React Icons

const VideoInfoSection = () => {
  const [activeTab, setActiveTab] = useState("Buyer"); // State to manage active tab

  const TabButton = ({ children, tab }) => (
    <button
      className={`font-bold text-base pb-2 ${
        activeTab === tab
          ? "border-b-2 border-custom-orange text-custom-orange"
          : "text-white"
      }`}
      onMouseOver={(e) => (e.target.style.borderBottomColor = "#EB7150")} // Tailwind 'emerald-500' on hover
      onMouseOut={(e) =>
        (e.target.style.borderBottomColor =
          activeTab === tab ? "#EB7150" : "transparent")
      } // Tailwind 'blue-500' if active, transparent if not
      onClick={() => setActiveTab(tab)}
    >
      {children}
    </button>
  );

  return (
    <div
      style={{ backgroundColor: "#072F57" }}
      className="p-6 flex justify-around items-center m-10 rounded-md"
    >
      <div className="flex-1 px-8 py-12 ">
        <div className="relative pb-0 pt-[56.25%] mb-4 border rounded-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ" // Corrected YouTube embed URL
            title="Video Title"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="text-center mb-4 flex  space-x-4">
          <TabButton tab="Buyer">Buyer</TabButton>
          <TabButton tab="Supplier">Supplier</TabButton>
        </div>
        <ul
          className={`list-none space-y-2 text-white text-sm font-medium ${
            activeTab === "Buyer" ? "block" : "hidden"
          }`}
        >
          {[
            "Post your requirements.",
            "Sit back for multiple suppliers to contact you.",
            "Choose among the suppliers based on the ratings and reviews.",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <FaCheck className="text-white bg-green-600 mr-2 border-green-600 rounded-full" />{" "}
              {/* Green check icon */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul
          className={`list-none space-y-2 text-white text-sm font-medium ${
            activeTab === "Supplier" ? "block" : "hidden"
          }`}
        >
          {[
            "Complete your profile to attract buyers.",
            "Respond to buyer inquiries.",
            "Engage with projects and increase visibility.",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <FaCheck className="text-white bg-green-600 mr-2 border-green-600 rounded-full" />{" "}
              {/* Green check icon */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoInfoSection;
