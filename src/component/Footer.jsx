import React from "react";
import Logo from "../images/logo.png"; // Adjust path as needed
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-400 py-4">
      <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center border-y border-gray-500">
        <div>
          <img src={Logo} height={40} width={150} className="text-white" />
          <p className="text-xs mt-3">© R Singleton</p>
        </div>
        <div className="flex space-x-12">
          <div>
            <p className="font-bold text-white text-sm space-y-1">Company</p>
            <ul className="text-xs space-y-2">
              <li>About</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white text-sm space-y-1">Terms</p>
            <ul className="text-xs space-y-2">
              <li>Data privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white text-sm space-y-1">Related</p>
            <ul className="text-xs space-y-2">
              <li>Find Buyer</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
