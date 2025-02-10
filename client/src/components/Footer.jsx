import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/CommonCom/Logo"; // Importing your previous logo component

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <Logo />
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/licensing" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* Copyright */}
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2025 <Link to="/" className="hover:underline">Up Score™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
