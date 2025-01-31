import React from "react";

const Contact = () => {
  return (
    <div className="py-28 min-h-screen bg-base-200 flex items-center justify-center">
      <div className="overflow-hidden max-w-4xl bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="p-6 bg-gray-100 sm:rounded-lg">
            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
              Get in touch:
            </h1>
            <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
              Fill in the form to start a conversation
            </p>

            {/* Address */}
            <div className="flex items-center mt-8 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                Jatoi Hostel Room 42, Mehran UET, Jamshoro, Sindh
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center mt-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                03325408289
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center mt-2 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                moinhaiderqadir@gmail.com
              </div>
            </div>
          </div>

          {/* Right Side - Buttons */}
          <div className="bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-6">
              {/* Heading */}
              <h1 className="text-4xl font-bold text-blue-600">
                Contact Us
              </h1>

              {/* Buttons Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Phone Button */}
                <a
                  href="tel:03325408289"
                  className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out text-lg"
                >
                  📞 Phone
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/03163756642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-white font-semibold bg-green-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out text-lg"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
