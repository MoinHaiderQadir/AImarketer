import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4 sm:px-8">
      {/* Transparent Image */}
      <div className="relative w-full max-w-2xl">
        <img
          src="/Images/Netax.jpg" // Replace this URL with your image URL
          alt="Transparent Example"
          className="opacity-30 w-full rounded-lg"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-2xl sm:text-4xl font-bold text-gray-700">
          Welcome to Home Page
        </h1>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => navigate("/signin")}
          className="bg-blue-500 text-white px-6 py-2 rounded-md text-base sm:text-lg hover:bg-blue-600 transition w-full sm:w-auto"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 text-white px-6 py-2 rounded-md text-base sm:text-lg hover:bg-green-600 transition w-full sm:w-auto"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
