import React from "react";

const VerificationSection = () => {
  return (
    <div
      style={{ backgroundColor: "#E8FBFF" }}
      className=" flex justify-around items-center py-8"
    >
      <div>
        <a href="/suppliers" className="no-underline">
          <h1 className="text-2xl font-bold text-black hover:text-gray-800">
            Let Suppliers{" "}
            <span className="underline decoration-custom-orange decoration-3 pb-1">
              Find You
            </span>
          </h1>
        </a>
        {/* Removed the separate underline div */}
      </div>
      <button className="bg-custom-orange hover:bg-custom-orange text-white font-bold py-2 px-4 rounded">
        Get Verified
      </button>
    </div>
  );
};

export default VerificationSection;
