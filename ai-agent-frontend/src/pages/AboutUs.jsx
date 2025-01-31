import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          About AI Digital Marketer
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          AI Digital Marketer leverages the power of artificial intelligence to transform the way businesses market and engage with customers. Our cutting-edge tools and data-driven strategies ensure your brand stands out in today’s competitive landscape.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Empower Your Marketing with AI
          </h2>
          <p className="leading-relaxed text-base sm:text-lg">
            From personalized campaigns to intelligent customer insights, we provide end-to-end AI-powered solutions tailored to your business needs. Whether you're a small business or a global enterprise, AI Digital Marketer is here to help you succeed.
          </p>
          <p className="leading-relaxed text-base sm:text-lg">
            With our services, you can:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Automate repetitive marketing tasks.</li>
            <li>Analyze customer data with precision.</li>
            <li>Enhance customer engagement through personalized strategies.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/Images/Nettax.png" // Replace with your image URL
            alt="AI Digital Marketing Illustration"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
