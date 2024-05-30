import React from "react";
import role from "../images/Group 33.png";
import profile from "../images/document .png";
import review from "../images/Layer_x0020_1.png";
import suppliers from "../images/g2259.png";
import contact from "../images/quote-request 1.png";
import connect from "../images/Group.png";

const HowItWorks = () => {
  return (
    <div className="bg-white text-gray-700 p-8">
      <div className="mb-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-black text-center">
          How it works?
        </h2>
        <p
          className="text-sm font-medium py-4 text-black text-center"
          style={{ maxWidth: "700px", lineHeight: "1.5" }}
        >
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div className="bg-white text-gray-700 p-16">
        <div className="grid md:grid-cols-3 gap-0">
          <div
            style={{ backgroundColor: "#E8FBFF" }} // Light blue background for even items
            className="flex flex-col items-center text-center px-12 py-10"
          >
            <img
              src={role}
              alt="Select Role"
              className="mb-4"
              style={{ height: "75px", width: "75px" }}
            />
            <h3
              style={{ maxWidth: "150px" }}
              className="font-semibold text-gray-900"
            >
              Select Your Role and Sign Up
            </h3>
          </div>
          <div className="flex flex-col items-center text-center px-12 py-10">
            <img
              src={profile}
              alt="Post Requirements"
              className="mb-4"
              style={{ height: "75px", width: "75px" }}
            />
            <h3
              style={{ maxWidth: "150px" }}
              className="font-semibold text-gray-900"
            >
              Buyers Post Your Requirements
            </h3>
          </div>
          <div
            style={{ backgroundColor: "#E8FBFF" }}
            className="flex flex-col items-center text-center px-12 py-10"
          >
            <img
              src={review}
              alt="Review Suppliers"
              className="mb-4"
              style={{ height: "75px", width: "75px" }}
            />
            <h3
              style={{ maxWidth: "200px" }}
              className="font-semibold text-gray-900"
            >
              Review, Select, and Contact the Best Suppliers
            </h3>
          </div>
          <div className="flex flex-col items-center text-center px-12 py-10">
            <img
              src={suppliers}
              alt="Suppliers Profile"
              className="mb-4"
              style={{ height: "75px", width: "75px" }}
            />
            <h3
              style={{ maxWidth: "200px" }}
              className="font-semibold text-gray-900"
            >
              Suppliers Complete your profile and get notified for opportunities
            </h3>
          </div>
          <div
            style={{ backgroundColor: "#E8FBFF" }}
            className="flex flex-col items-center text-center px-12 py-10"
          >
            <img
              src={contact}
              alt="Contact Buyers"
              className="mb-4"
              style={{ height: "75px", width: "75px" }}
            />
            <h3
              style={{ maxWidth: "250px" }}
              className="font-semibold text-gray-900"
            >
              Contact to Buyers and Share your Quote for the service
            </h3>
          </div>
          <div className="flex flex-col items-center text-center px-12 py-10">
            <img
              src={connect}
              alt="Connect"
              className="mb-4"
              style={{ height: "75px", width: "75px" }}
            />
            <h3
              style={{ maxWidth: "230px" }}
              className="font-semibold text-gray-900"
            >
              Both the Parties can Connect and Make Business Leave a Feedback
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
