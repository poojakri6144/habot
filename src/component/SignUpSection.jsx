import React from "react";

const SignupSection = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to dive into{" "}
            <a href="/habot" className=" text-blue-950 hover:text-blue-700">
              HABOT{" "}
            </a>
            ?
          </h2>
          <p className="text-gray-600 mb-8 font-medium text-lg text-justify pt-3 pr-10">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-10 rounded inline-flex items-center text-lg ">
            Sign up Today !
            <span className="ml-10 text-4xl -mt-2 font-light">→</span>
          </button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 p-10">
          {[
            "Abu Dhabi",
            "Dubai",
            "Sharjah & Ajman",
            "Fujairah",
            "Ras Al Khaimah",
            "Umm Al Quwain",
          ].map((location) => (
            <button
              key={location}
              className="bg-white border-2 border-orange-300 text-orange-800 py-3 px-2   rounded-lg font-semibold hover:bg-orange-100"
            >
              {location}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
