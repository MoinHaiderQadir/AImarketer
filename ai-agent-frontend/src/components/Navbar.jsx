import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">AI Digital Marketer</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              Home
            </Link>

            <Link
              to="/aboutus"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              About
            </Link>

            <Link
              to="/services"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              Contact
            </Link>
            
           
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-1">
            <Link
              to="/"
              className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              About
            </Link>
            <Link
              to="/"
              className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
