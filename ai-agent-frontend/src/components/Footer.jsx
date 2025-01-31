import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="flex space-x-4">
          <Link
              to="/"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              Home
            </Link>
           
            <Link
              to="/aboutus"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              About
            </Link>





            <Link
              to="/services"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              © 2025 My Website. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
